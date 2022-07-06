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
import HeroSection from "components/HeroSection.styled";
import Highlight from "components/Highlight.styled";
import Section from "components/Section.styled";
import ServiceCard, {
  ServiceCardImg,
  ServiceCardTextContainer,
} from "components/ServiceCard.styled";
import Divider from "components/Divider.styled";
import GridWrap from "components/GridWrap";
import serviceCardData from "components/ServiceCard.data";
import GridArea from "components/GridArea.styled";
import ContactSectionGrid from "components/ContactSectionGrid.styled";
import ContactCard from "components/ContactCard.syled";
import ContactForm from "components/ContactForm";
import Footer from "components/Footer.styled";
import FooterGrid from "components/FooterGrid.styled";
import Link from "components/Link.styled";
import NewsletterForm from "components/NewsletterForm";
import SocialLinkList from "components/SocialLinkList";
import Box from "components/Box/Box.styled";
import Typography from "components/Typography/Typography.styled";

import phoneIcon from "assets/icons/phone.svg";
import arrowIcon from "assets/icons/arrow.svg";
import technicianImage from "assets/images/technician.png";
import carRearEndImage from "assets/images/car-rear-end.jpg";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>
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
                  <Typography fontSize="300">(+1) 943-888-609</Typography>
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
            <Typography as="h1">
              Bringing cars <Highlight>back to life.</Highlight>
            </Typography>
            <Typography as="h2" css="width: 60%">
              Labore ad minim labore eiusmod id tempor nostrud est. Consectetur
              ad ad consequat aliqua quis.
            </Typography>
            <ButtonWithIcon variant="contained">
              <span>Contact us</span>
              <img src={arrowIcon} alt="arrow icon" />
            </ButtonWithIcon>
          </Container>
        </HeroSection>
        <Section>
          <Container>
            <Typography as="h1" textAlign="center" uppercase>
              What we do.
            </Typography>
            <Divider width="80px" thickness="4px" color="text-primary" round />
            <Typography as="h2" textAlign="center" mb="md" mt="md">
              Adipisicing deserunt culpa proident labore nostrud adipisicing
              dolor officia fugiat.
            </Typography>
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
        <Section>
          <Container disableRightGutter>
            <GridArea>
              <div>
                <Typography
                  as="h1"
                  uppercase
                  oneWordPerLine
                  lineHeight="2.125em"
                >
                  Who we are.
                </Typography>
                <Divider
                  position="start"
                  width="80px"
                  thickness="4px"
                  color="text-primary"
                  round
                />
              </div>
              <div>
                <Typography as="h2">Aliquip elit tempor sint ad ad.</Typography>
                <Typography>
                  Elit commodo dolore minim ipsum cupidatat officia culpa eu do
                  aliquip. Dolore nostrud culpa tempor nisi proident esse qui
                  elit enim et. Qui occaecat occaecat occaecat cupidatat enim.
                  Lorem qui ex ut dolor amet amet cillum quis.Aliqua aliquip
                  reprehenderit eu aliqua ad officia sunt fugiat elit sint. Qui
                  ipsum voluptate mollit elit culpa. Aliqua esse non commodo
                  Lorem anim laboris qui laboris esse consectetur deserunt sunt.
                  Ea sint consequat eu dolore anim deserunt cillum qui
                  excepteur.
                </Typography>
              </div>
              <div>
                <img src={technicianImage} alt="Technician repairig car" />
              </div>
              <img src={carRearEndImage} alt="Rear-end of classic car" />
            </GridArea>
          </Container>
        </Section>
        <Section>
          <Container>
            <ContactSectionGrid>
              <div></div>
              <div>
                <ContactCard>
                  <Typography as="h1">Let's talk.</Typography>
                  <Divider
                    position="start"
                    width="80px"
                    thickness="4px"
                    color="text-primary"
                    round
                  />
                  <Typography as="h2" mt="md">
                    Share your excitment with us.
                  </Typography>
                  <ContactForm />
                </ContactCard>
              </div>
            </ContactSectionGrid>
          </Container>
        </Section>
        <Footer>
          <Container>
            <FooterGrid>
              <Logo>Logo</Logo>
              <FlexContainer
                css="grid-area: nav"
                py="lg"
                justifyContent="space-between"
              >
                <div>
                  <Typography
                    as="h3"
                    fontSize="400"
                    fontWeight="semi-bold"
                    uppercase
                    mb="xs"
                  >
                    Company
                  </Typography>
                  <Divider
                    position="start"
                    width="60px"
                    thickness="1px"
                    color="primary"
                    gutterBottom
                  />
                  <ul>
                    <li>
                      <Link my="sm">Services</Link>
                    </li>
                    <li>
                      <Link my="sm">About us</Link>
                    </li>
                    <li>
                      <Link my="sm">Contact</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <Typography
                    as="h3"
                    fontSize="400"
                    fontWeight="semi-bold"
                    uppercase
                    mb="xs"
                  >
                    Legal
                  </Typography>
                  <Divider
                    position="start"
                    width="60px"
                    thickness="1px"
                    color="primary"
                    gutterBottom
                  />
                  <ul>
                    <li>
                      <Link my="sm">License</Link>
                    </li>
                    <li>
                      <Link my="sm">Privicy Policy</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <Typography
                    as="h3"
                    fontSize="400"
                    fontWeight="semi-bold"
                    uppercase
                    mb="xs"
                  >
                    Contact
                  </Typography>
                  <Divider
                    position="start"
                    width="60px"
                    thickness="1px"
                    color="primary"
                    gutterBottom
                  />
                  <ul>
                    <li>
                      <Link as="p" my="sm">
                        (+1) 943-888-609
                      </Link>
                    </li>
                    <li>
                      <Link as="p" my="sm">
                        company@gmail.com
                      </Link>
                    </li>
                  </ul>
                </div>
              </FlexContainer>
              <Box css="grid-area: newsletter" my="lg">
                <Typography
                  as="h2"
                  mb="md"
                  fontSize="500"
                  fontWeight="semi-bold"
                  uppercase
                >
                  Stay tuned.
                </Typography>
                <NewsletterForm />
              </Box>
              <Divider
                css="grid-area: divider"
                fullWidth
                thickness="0.5px"
                gutterBottom
              />
              <FlexContainer
                css="grid-area: footer-bottom"
                justifyContent="space-between"
                mt="md"
                mb="lg"
              >
                <Typography fontSize="300">
                  &copy;2022 Company. All rights reserved
                </Typography>
                <FlexContainer dropShadow>
                  <Box mr="lg">
                    <Typography>Find us on</Typography>
                  </Box>
                  <SocialLinkList />
                </FlexContainer>
              </FlexContainer>
            </FooterGrid>
          </Container>
        </Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
