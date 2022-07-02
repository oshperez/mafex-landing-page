import styled, { css } from "styled-components";

const Button = styled.a`
  font-size: ${({ theme }) => theme.typography.fontSize400};
  font-weight: ${({ theme }) => theme.typography.fontWeightSemiBold};
  padding: 0.75rem 1.25rem;
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  cursor: pointer;

  ${({ variant, theme }) =>
    variant === "contained" &&
    css`
      font-size: ${({ theme }) => theme.typography.fontSize300};
      text-transform: uppercase;
      background-color: ${theme.palette.primary.main};
      padding-block: 1rem;
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
      border-radius: 200px;
    `}

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

  ${({ mt }) =>
    mt &&
    css`
      margin-top: ${({theme}) => theme.spacing[mt]};
    `}

  ${({ mb }) =>
    mb &&
    css`
      margin-bottom: ${({theme}) => theme.spacing[mb]};
    `}


`;

export const ButtonWithIcon = styled(Button)`
  display: flex;
  width: fit-content;
  align-items: center;
  & > *:first-child {
    margin-right: 10px;
  }
`;

export default Button;
