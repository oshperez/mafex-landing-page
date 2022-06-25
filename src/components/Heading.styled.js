import styled from "styled-components";
import { kebabCaseToCamelCase } from "utils/helpers";

const Heading = styled.h1.attrs((props) => ({
  fontSize:
    props.theme.typography[`fontSize${props.fontSize}`] ||
    props.theme.typography.fontSize800,
  fontWeight:
    props.theme.typography[
      `fontWeight${kebabCaseToCamelCase(props.fontWeight)}`
    ] || props.theme.typography.fontWeightBold,
  marginTop: props.theme.spacing[`${props.mt}`] || "unset",
  marginBottom: props.theme.spacing[`${props.mb}`] || props.theme.spacing.xs,
}))`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
`;

export default Heading;
