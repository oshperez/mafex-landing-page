import styled, { css } from "styled-components";
import { spaceMixin } from "utils/mixins";

const FlexContainer = styled.div`
  display: flex;
  ${spaceMixin}

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
      filter: drop-shadow(${theme.shadow.dropShadow[0]});
    `}
`;

export default FlexContainer;
