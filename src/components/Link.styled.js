import styled, { css } from "styled-components";

const Link = styled.a`
  display: inline-block;
  cursor: pointer;

  ${({ mb, theme }) =>
    mb &&
    css`
      margin-bottom: ${theme.sizes.spacing.includes(mb) ? theme.spacing[mb] : mb};
    `}

  ${({ mt, theme }) =>
    mt &&
    css`
      margin-top: ${theme.sizes.spacing.includes(mt) ? theme.spacing[mt] : mt};
    `}
  ${({ mr, theme }) =>
    mr &&
    css`
      margin-right: ${theme.sizes.spacing.includes(mr) ? theme.spacing[mr] : mr};
    `}
  ${({ ml, theme }) =>
    ml &&
    css`
      margin-left: ${theme.sizes.spacing.includes(ml) ? theme.spacing[ml] : ml};
    `}

  ${({ my, theme }) =>
    my &&
    css`
      margin-block: ${theme.sizes.spacing.includes(my) ? theme.spacing[my] : my};
    `}

${({ mx, theme }) =>
    mx &&
    css`
      margin-inline: ${theme.sizes.spacing.includes(mx) ? theme.spacing[mx] : mx};
    `}
`;

export default Link;
