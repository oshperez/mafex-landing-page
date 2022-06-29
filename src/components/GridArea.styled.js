import styled from "styled-components";

const GridArea = styled.div`
  display: grid;
  grid-template-columns: minmax(220px, 10%) 1fr 1fr;
  grid-template-rows: 2fr 1fr;
  grid-template-areas:
    "heading img1 img2"
    "text text img2";
  padding-block: ${({ theme }) => theme.spacing.xl};

  & > div:first-of-type {
    grid-area: heading;
    align-self: end;
  }

  & > div:nth-child(2) {
    grid-area: text;
    align-self: end;
    padding-right: ${({ theme }) => theme.spacing.xl};
  }

  & > div:last-of-type {
    grid-area: img1;
    position: relative;
    display: flex;
    height: 100%;
    justify-content: flex-end;
    align-items: flex-end;
  }

  & > div:last-of-type::after {
    content: "";
    position: absolute;
    right: -10%;
    bottom: 0;
    width: 55%;
    height: 100%;
    background-color: ${({ theme }) => theme.palette.primary.main};
    z-index: 1;
  }

  & > div img {
    max-width: 100%;
    max-height: 360px;
    z-index: 2;
  }

  & > img {
    grid-area: img2;
    max-width: 100%;
  }
`;

export default GridArea;
