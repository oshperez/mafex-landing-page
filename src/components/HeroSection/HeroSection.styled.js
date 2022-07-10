import styled from "styled-components";
import Section from "../Section/Section.styled";
import carImage from "assets/images/car.png";

const HeroSection = styled(Section)`
  width: 100%;
  min-height: 750px;
  background-image: url(${carImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left top 100%;
  padding-top: 11em;
`;

export default HeroSection;
