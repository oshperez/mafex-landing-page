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
  marginTop: props.theme.spacing[`${props.mt}`] || "unset",
  marginBottom: props.theme.spacing[`${props.mb}`] || props.theme.spacing.md,
}))`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};

  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}
`;

export default Subheading;
