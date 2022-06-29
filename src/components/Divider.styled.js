import styled, { css } from "styled-components";

const Divider = styled.div.attrs((props) => ({
  color: props.color || props.theme.palette.text.disabled,
  thickness: props.thickness || "1.5px",
}))`
  width: 90%;
  height: ${({ thickness }) => thickness};
  margin-inline: auto;
  background-color: ${({ color }) => color};

  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}

  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `}

  ${(props) =>
    props.gutterBottom &&
    css`
      margin-bottom: ${props.theme.spacing.sm};
    `}

  ${({ color }) =>
    color === "primary" &&
    css`
      background-color: ${({ theme }) => theme.palette.primary.main};
    `}

  ${({ color }) =>
    color === "text-primary" &&
    css`
      background-color: ${({ theme }) => theme.palette.text.primary};
    `}
    
  ${({ round }) =>
    round &&
    css`
      border-radius: 200px;
    `}
  ${({ position }) =>
    position === "start" &&
    css`
      margin-left: 0;
    `}
  ${({ position }) =>
    position === "end" &&
    css`
      margin-right: 0;
    `}
`;
export default Divider;
