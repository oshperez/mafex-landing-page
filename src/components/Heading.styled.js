import styled, { css } from "styled-components";
import { kebabCaseToCamelCase } from "utils/helpers";

const Heading = styled.h1.attrs((props) => ({
  fontSize:
    props.theme.typography[`fontSize${props.fontSize}`] ||
    props.theme.typography.fontSize800,
  fontWeight:
    props.theme.typography[
      `fontWeight${kebabCaseToCamelCase(props.fontWeight)}`
    ] || props.theme.typography.fontWeightBold,
  textAlign: props.textAlign || "start",
  marginTop: props.theme.spacing[`${props.mt}`] || "unset",
  marginBottom: props.theme.spacing[`${props.mb}`] || props.theme.spacing.xs,
}))`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  text-align: ${(props) => props.textAlign};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};

  ${(props) =>
    props.uppercase &&
    css`
      text-transform: uppercase;
    `}

  ${(props) =>
    props.oneWordPerLine &&
    css`
      word-spacing: 999rem;
    `}

  
  ${(props) =>
    props.lineHeight &&
    css`
      line-height: ${props.lineHeight};
    `}
`;

export default Heading;
