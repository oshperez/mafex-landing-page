import styled from "styled-components";
import carImg from "assets/images/car2.jpg";

const ContactSectionGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr minmax(100px, 10%) 1fr;
  grid-template-areas: "picture overlap card";
  width: 100%;

  & > div:first-child {
    grid-column-start: picture-start;
    grid-column-end: overlap-end;
    grid-row-start: 1;
    grid-row-end: 2;
    background-image: url(${carImg});
    background-size: cover;
    background-position: 50% 70%;
    z-index: 1;
  }
  & > div:last-child {
    display: grid;
    align-items: center;
    grid-area: 1 / overlap-start / 2 / card-end;
    z-index: 2;

  }
`;

export default ContactSectionGrid;
