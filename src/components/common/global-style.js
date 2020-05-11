import { useColorMode, CSSReset } from "@chakra-ui/core";
import { Global, css } from "@emotion/core";

export const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          ::selection {
            background-color: #47a3f3;
            color: #fefefe;
          }
          html {
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            background: ${colorMode === "light" ? "#F7FAFC" : "#2D3748"};
          }
          #nprogress .spinner {
            display: none;
          }
          #nprogress .bar {
            background-color: ${colorMode === "dark" ? "#F7FAFC" : "#2D3748"};
            height: 4px;
          }
          .highlight-line {
            background-color: rgb(53, 59, 69);
            width: "100%";
            display: block;
            margin-right: -1em;
            margin-left: -1em;
            padding-right: 1em;
            padding-left: 0.75em;
            border-left: 0.3em solid #c9c9c9;
          }
          p,
          li {
            code {
              background-color: ${colorMode === "dark" ? "#F7FAFC" : "silver"};
              padding: 6px 8px;
              border-radius: 12px;
              color: ${colorMode === "light" ? "#F7FAFC" : "#2D3748"};
            }
          }
          /** force the twitter widget to be responsive */
          twitter-widget {
            max-width: 500px !important;
            width: 100% !important;
          }
        `}
      />
      {children}
    </>
  );
};
