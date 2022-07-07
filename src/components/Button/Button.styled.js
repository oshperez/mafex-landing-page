import styled, { css } from "styled-components";
import { fontMixin, spaceMixin } from "utils/mixins";

const StyledButton = styled.a`
  font-size: ${({ theme }) => theme.typography.fontSize400};
  font-weight: ${({ theme }) => theme.typography.fontWeightSemiBold};
  padding: 1em 1.75em;
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  cursor: pointer;

  ${spaceMixin}
  ${fontMixin}
  
  ${({ size }) =>
    size === "large" &&
    css`
      padding: 1.25em 2em;
    `}

  ${({ size }) =>
    size === "small" &&
    css`
      padding: 0.85em 1.5em;
    `}

  ${({ startIcon, endIcon }) =>
    (startIcon || endIcon) &&
    css`
      display: flex;
      align-items: center;
      width: fit-content;

      & > *:first-child {
        margin-right: 10px;
      }
    `}

    ${({ variant, theme }) =>
    variant === "contained" &&
    css`
      background-color: ${theme.palette.primary.main};
      &:hover {
        opacity: 0.95;
      }
    `}

  ${({ variant, theme }) =>
    variant === "outlined" &&
    css`
      border: thin solid ${theme.palette.primary.main};
      &:hover {
        background-color: ${theme.palette.common.lightPink};
      }
    `}

    ${({ pill }) =>
    pill &&
    css`
      border-radius: 500px;
    `}

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
  ${({ uppercase }) =>
    uppercase &&
    css`
      text-transform: uppercase;
    `}
`;

export default StyledButton;
