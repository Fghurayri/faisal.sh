import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import rangeParser from "parse-numeric-range";
import theme from "prism-react-renderer/themes/nightOwl";
import styled from "@emotion/styled";
import { Pre } from "./pre";

const calculateLinesToHighlight = (meta) => {
  const RE = /{([\d,-]+)}/;
  if (RE.test(meta)) {
    const strlineNumbers = RE.exec(meta)[1];
    const lineNumbers = rangeParser(strlineNumbers);
    return (index) => lineNumbers.includes(index + 1);
  } else {
    return () => false;
  }
};

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

const LineContent = styled.span`
  display: table-cell;
`;

const listOfLangsWithNoLineNo = ["bash"];

export default function CodeBlock({ children, className, metastring }) {
  const language = className.replace(/language-/, "");
  const shouldHighlightLine = calculateLinesToHighlight(metastring);
  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          {tokens.map((line, i) => {
            const lineProps = getLineProps({ line, key: i });
            if (shouldHighlightLine(i)) {
              lineProps.className = `${lineProps.className} highlight-line`;
            }
            return (
              <div key={i} {...lineProps}>
                {!listOfLangsWithNoLineNo.includes(language) && (
                  <LineNo>{i + 1}</LineNo>
                )}
                {line.map((token, key) => (
                  <LineContent key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            );
          })}
        </Pre>
      )}
    </Highlight>
  );
}
