import styled from "styled-components";
import carImage from "assets/images/car.png";
import Section from "./Section.styled";

const HeroSection = styled(Section)`
  background-image: url(${carImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left top 110%;
  width: 100%;
  min-height: 700px;
  padding-top: 5rem;
`;

export default HeroSection;
