import React from "react";
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

  ${({ outlineDisabled }) =>
    outlineDisabled &&
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

const InputFielddWrapper = styled.div`
  position: relative;
  width: 100%;

  &::before {
    content: url(${(props) => props.startIcon});
    position: absolute;
    display: block;
    top: 50%;
    left: 15px;
    width: 17px;
    height: 17px;
    transform: translateY(-50%);
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};

  ${(props) =>
    props.gutterBottom &&
    css`
      margin-bottom: ${({ theme }) => theme.spacing.lg};
    `}
`;

const InputLabel = styled.label`
  font-size: ${({ theme }) => theme.typography.fontSize300};
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
`;

const InputField = ({
  label,
  name,
  startIcon,
  gutterBottom,
  required,
  ...props
}) => {
  const inputField = (
    <StyledInputField name={name} required={required} {...props} />
  );

  return (
    <InputContainer gutterBottom={gutterBottom}>
      {label && (
        <InputLabel for={name}>{`${label}${required ? " *" : ""}`}</InputLabel>
      )}
      {startIcon
        ? React.cloneElement(<InputFielddWrapper />, { startIcon }, [
            inputField,
          ])
        : inputField}
    </InputContainer>
  );
};

export default InputField;
