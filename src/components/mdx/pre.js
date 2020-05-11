import styled from "@emotion/styled";

export const Pre = styled.pre`
  text-align: left;
  margin: 2em 0;
  padding: 1em;
  border-radius: 12px;
  font-weight: 100;
  overflow: auto;
  overflow-y: hidden;

  & .token-line {
    height: 1.6em;
  }
`;
