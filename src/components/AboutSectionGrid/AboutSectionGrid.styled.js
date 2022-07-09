import styled from "styled-components";

const AboutSectionGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(220px, 10%) 1fr 1fr;
  grid-template-rows: 2fr 1fr;
  grid-template-areas:
    "heading img1 img2"
    "text text img2";
  padding-block: ${({ theme }) => theme.spacing.xl};
`;

export default AboutSectionGrid;
