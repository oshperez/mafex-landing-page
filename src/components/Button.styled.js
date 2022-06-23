import styled, { css } from "styled-components";

const Button = styled.a.attrs((props) => ({
  variant: props.variant || "defualt",
}))`
  font-size: ${({ theme }) => theme.typography.fontSize400};
  font-weight: ${({ theme }) => theme.typography.fontWeightSemiBold};
  padding: 0.65rem 1.25rem;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.shape.borderRadius};

  ${({ variant }) =>
    variant === "contained" &&
    css`
      background-color: ${({ theme }) => theme.palette.primary.main};
      &:hover {
        background-color: ${({theme}) => theme.palette.primary.light};
        transform: scale(1.01)
      }
    `}

  ${({ variant }) =>
    variant === "outlined" &&
    css`
      border: 2px solid ${({ theme }) => theme.palette.primary.main};
    `}

  ${({ pill }) =>
    pill &&
    css`
      border-radius: 200px;
    `}
`;

export const ButtonWithIcon = styled(Button)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > *:first-child {
    margin-right: 10px;
  }
`;

export default Button;
