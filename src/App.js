import GlobalStyles from "components/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

import Container from "components/Container.styled";
import Logo from "components/Logo.styled";
import Navigation from "components/Navigation.styled";
import Button, { ButtonWithIcon } from "./components/Button.styled";
import Header from "components/Header.styled";
import NavLink from "components/NavLink.styled";
import FlexContainer from "components/FlexContainer.styled";
import PhoneNumber from "components/PhoneNumber.styled";
import HeroSection from "components/HeroSection.styled";
import Heading from "components/Heading.styled";
import Subheading from "components/Subheading.styled";
import Highlight from "components/Highlight.styled";
import Section from "components/Section.styled";
import ServiceCard, {
  ServiceCardImg,
  ServiceCardTextContainer,
} from "components/ServiceCard.styled";

import phoneIcon from "assets/icons/phone.svg";
import arrowIcon from "assets/icons/arrow.svg";
import autoPatchImg from "assets/images/panel-patch.jpg";
import Divider from "components/Divider.styled";
import GridWrap from "components/GridWrap";
import serviceCardData from "components/ServiceCard.data";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <Header>
          <Container>
            <Navigation>
              <Logo>Logo</Logo>
              <ul>
                <li>
                  <NavLink href="#" active>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink href="#">About us</NavLink>
                </li>
                <li>
                  <NavLink href="">Services</NavLink>
                </li>
                <li>
                  <NavLink href="">Contact</NavLink>
                </li>
              </ul>
              <FlexContainer dropShadow>
                <ButtonWithIcon>
                  <img
                    src={phoneIcon}
                    alt="phone icon"
                    style={{ with: 16, height: 17 }}
                  />
                  <PhoneNumber>(+1) 943-888-609</PhoneNumber>
                </ButtonWithIcon>
                <Button variant="outlined" pill>
                  Get in touch
                </Button>
              </FlexContainer>
            </Navigation>
          </Container>
        </Header>
        <HeroSection>
          <Container>
            <Heading mb="xs">
              Bringing cars <Highlight>back to life.</Highlight>
            </Heading>
            <Subheading width="60%" mb="lg">
              Labore ad minim labore eiusmod id tempor nostrud est. Consectetur
              ad ad consequat aliqua quis.
            </Subheading>
            <ButtonWithIcon variant="contained">
              <span>Contact us</span>
              <img src={arrowIcon} alt="arrow icon" />
            </ButtonWithIcon>
          </Container>
        </HeroSection>
        <Section>
          <Container>
            <Heading textAlign="center" uppercase>
              What we do.
            </Heading>
            <Divider width="80px" thickness="4px" color="text-primary" round />
            <Subheading textAlign="center" mb="md" mt="md">
              Adipisicing deserunt culpa proident labore nostrud adipisicing
              dolor officia fugiat.
            </Subheading>
            <GridWrap mt="xxl">
              {serviceCardData.map(({ serviceName, description, image }) => (
                <ServiceCard>
                  <ServiceCardImg src={image} />
                  <ServiceCardTextContainer>
                    <h2>{serviceName}</h2>
                    <Divider fullWidth gutterBottom />
                    <p>{description} </p>
                  </ServiceCardTextContainer>
                </ServiceCard>
              ))}
            </GridWrap>
          </Container>
        </Section>
      </div>
    </ThemeProvider>
  );
}

export default App;
