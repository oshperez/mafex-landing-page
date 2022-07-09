import styled from "styled-components";

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-columns: 1fr 0.75fr;
  grid-template-rows: repeat(4, auto);
  grid-template-areas:
    "logo logo"
    "nav newsletter"
    "divider divider"
    "footer-bottom footer-bottom";
  gap: 0 200px;
`;

export default FooterGrid;
