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
import Divider from "components/Divider.styled";
import GridWrap from "components/GridWrap";
import serviceCardData from "components/ServiceCard.data";
import GridArea from "components/GridArea.styled";

import phoneIcon from "assets/icons/phone.svg";
import arrowIcon from "assets/icons/arrow.svg";
import technicianImage from "assets/images/technician.png";
import carRearEndImage from "assets/images/car-rear-end.jpg";
import ContactSectionGrid from "components/ContactSectionGrid.styled";
import ContactCard from "components/ContactCard.syled";
import ContactForm from "components/ContactForm";
import Footer from "components/Footer.styled";
import FooterGrid from "components/FooterGrid.styled";
import FooterNav from "components/FooterNav.styled";
import CopyRight from "components/CopyRight.styled";
import Link from "components/Link.styled";
import FooterBootom from "components/FooterBottom.styled";
import NewsletterForm from "components/NewsletterForm";
import SocialLinkList from "components/SocialLinkList";

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
        <Section>
          <Container disableRightGutter>
            <GridArea>
              <div>
                <Heading uppercase oneWordPerLine lineHeight="2em" mb="sm">
                  Who we are.
                </Heading>
                <Divider
                  position="start"
                  width="80px"
                  thickness="4px"
                  color="text-primary"
                  round
                />
              </div>
              <div>
                <Subheading>Aliquip elit tempor sint ad ad.</Subheading>
                <p>
                  Elit commodo dolore minim ipsum cupidatat officia culpa eu do
                  aliquip. Dolore nostrud culpa tempor nisi proident esse qui
                  elit enim et. Qui occaecat occaecat occaecat cupidatat enim.
                  Lorem qui ex ut dolor amet amet cillum quis.Aliqua aliquip
                  reprehenderit eu aliqua ad officia sunt fugiat elit sint. Qui
                  ipsum voluptate mollit elit culpa. Aliqua esse non commodo
                  Lorem anim laboris qui laboris esse consectetur deserunt sunt.
                  Ea sint consequat eu dolore anim deserunt cillum qui
                  excepteur.
                </p>
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
                  <Heading>Let's talk.</Heading>
                  <Divider
                    position="start"
                    width="60px"
                    thickness="3px"
                    color="text-primary"
                    round
                  />
                  <Subheading fontSize="500" mt="md" mb="lg">
                    Share your excitment with us.
                  </Subheading>
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
              <FooterNav>
                <div>
                  <Subheading
                    as="h3"
                    fontSize="400"
                    fontWeight="semi-bold"
                    uppercase
                    mb="xs"
                  >
                    Company
                  </Subheading>
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
                  <Subheading
                    as="h3"
                    fontSize="400"
                    fontWeight="semi-bold"
                    uppercase
                    mb="xs"
                  >
                    Legal
                  </Subheading>
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
                  <Subheading
                    as="h3"
                    fontSize="400"
                    fontWeight="semi-bold"
                    uppercase
                    mb="xs"
                  >
                    Contact
                  </Subheading>
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
              </FooterNav>
              <div style={{ gridArea: "newsletter" }}>
                <Subheading fontSize="500" fontWeight="semi-bold" uppercase>
                  Stay tuned.
                </Subheading>
                <NewsletterForm />
              </div>
              <Divider
                style={{ gridArea: "divider" }}
                fullWidth
                thickness="0.5px"
                gutterBottom
              />
              <FooterBootom>
                <CopyRight>
                  <p>&copy;2022 Company. All rights reserved</p>
                </CopyRight>
                <div>
                  <FlexContainer dropShadow>
                    <p style={{ marginRight: "2rem" }}>Find us on</p>
                    <SocialLinkList />
                  </FlexContainer>
                </div>
              </FooterBootom>
            </FooterGrid>
          </Container>
        </Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
