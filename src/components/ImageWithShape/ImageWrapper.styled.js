import styled from "styled-components";

const ImageWrapper = styled.div`
  grid-area: img1;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 100%;

  &::after {
    content: "";
    position: absolute;
    right: -10%;
    bottom: 0;
    width: 55%;
    height: 100%;
    background-color: ${({ theme }) => theme.palette.primary.main};
    z-index: 1;
  }
`;
export default ImageWrapper;
