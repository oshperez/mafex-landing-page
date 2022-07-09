import styled, { css } from "styled-components";

const StyledInputField = styled.input`
  width: 100%;
  min-height: 2.75em;
  outline: 1.5px solid ${({ theme }) => theme.palette.text.primary};
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  border-radius: 4px;
  padding-left: 2.75em;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.palette.primary.main};
  }

  ${({ disableOutline }) =>
    disableOutline &&
    css`
      outline: none;

      &:focus-visible {
        outline: none;
      }
    `}
    
  ${({ pill }) =>
    pill &&
    css`
      border-radius: 200px;
    `}

  ${(props) =>
    props.as === "textarea" &&
    css`
      padding: ${({ theme }) => theme.spacing.md};
    `}
`;

export default StyledInputField;