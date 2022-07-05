import styled, { css } from "styled-components";
import { kebabCaseToCamelCase } from "utils/helpers";

const Subheading = styled.h2.attrs((props) => ({
  fontSize:
    props.theme.typography[`fontSize${props.fontSize}`] ||
    props.theme.typography.fontSize600,
  fontWeight:
    props.theme.typography[
      `fontWeight${kebabCaseToCamelCase(props.fontWeight)}`
    ] || props.theme.typography.fontWeightRegular,
  textAlign: props.textAlign || "start",
  marginTop: props.theme.spacing[`${props.mt}`] || "unset",
  marginBottom: props.theme.spacing[`${props.mb}`] || props.theme.spacing.md,
}))`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  text-align: ${(props) => props.textAlign};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};

  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}

  ${({ uppercase }) =>
    uppercase &&
    css`
      text-transform: uppercase;
    `}
`;

export default Subheading;
