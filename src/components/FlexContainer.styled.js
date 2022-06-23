import styled, { css } from "styled-components";

const FlexContainer = styled.div`
  display: flex;

  ${({ flexDirection }) =>
    flexDirection &&
    css`
      flex-direction: ${flexDirection};
    `}

  ${({ flexWrap }) =>
    flexWrap &&
    css`
      flex-wrap: ${flexWrap};
    `}

  ${({ justifyContent }) =>
    justifyContent &&
    css`
      justify-content: ${justifyContent};
    `}

  ${({ alignItems }) =>
    alignItems &&
    css`
      align-items: ${alignItems};
    `}
  
  ${({ dropShadow, theme }) =>
  dropShadow &&
  css`
    filter: drop-shadow(${theme.shadow.dropShadow});
  `}
`;

export default FlexContainer;
