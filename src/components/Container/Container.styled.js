import styled, { css } from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1240px;
  padding-inline: 20px;
  margin-inline: auto;

  ${({ disableRightGutter }) =>
    disableRightGutter &&
    css`
      margin-right: 0;
      padding-right: 0;
      max-width: 1300px;
    `}
  ${({ disableLeftGutter }) =>
    disableLeftGutter &&
    css`
      margin-left: 0;
      padding-left: 0;
      max-width: 1300px;
    `}
`;

export default Container;
