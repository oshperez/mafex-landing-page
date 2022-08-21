import { useState } from "react";
import GlobalStyles from "components/GlobalStyles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

import Container from "components/Container/Container.styled";
import Logo from "components/Logo/Logo.styled";
import Navigation from "components/Navigation/Navigation.styled";
import Button from "components/Button/Button";
import Header from "components/Header/Header.styled";
import NavLink from "components/Link/NavLink.styled";
import FlexContainer from "components/FlexContainer/FlexContainer.styled";
import HeroSection from "components/HeroSection/HeroSection.styled";
import Highlight from "components/Highlight/Highlight.styled";
import Section from "components/Section/Section.styled";
import ServiceCard from "components/ServiceCard/ServiceCard.styled";
import ServiceCardImage from "components/ServiceCard/ServiceCardImage.styled";
import ServiceCardText from "components/ServiceCard/ServiceCardText.styled";
import Divider from "components/Divider/Divider.styled";
import ServiceSectionGrid from "components/ServiceSectionGrid/ServiceSectionGrid.styled";
import serviceCardData from "components/ServiceCard/ServiceCard.data";
import AboutSectionGrid from "components/AboutSectionGrid/AboutSectionGrid.styled";
import ContactSectionGrid from "components/ContactSectionGrid/ContactSectionGrid.styled";
import ContactCard from "components/ContactCard/ContactCard.styled";
import ContactForm from "components/ContactForm/ContactForm";
import Footer from "components/Footer/Footer.styled";
import FooterGrid from "components/Footer/FooterGrid.styled";
import Link from "components/Link/Link.styled";
import NewsletterForm from "components/NewsletterForm/NewsletterForm";
import SocialLinkList from "components/SocialLinkList/SocialLinkList";
import Box from "components/Box/Box.styled";
import Typography from "components/Typography/Typography.styled";
import List from "components/List/List.styled";
import ListItem from "components/ListItem/ListItem.styled";
import ImageWithShape from "components/ImageWithShape/ImageWithShape";
import BarIcon from "components/BarIcon/BarIcon";
import NavMenu from "components/NavMenu/NavMenu";
import FooterBottom from "components/Footer/FooterBottom.styled";
import FooterNav from "components/Footer/FooterNav.styled";

import { ReactComponent as PhoneIcon } from "assets/icons/phone.svg";
import { ReactComponent as ArrowIcon } from "assets/icons/arrow.svg";
import carRearEndImage from "assets/images/car-rear-end.jpg";
import NavSection from "components/Footer/NavSection.styled";

function App() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>
        <Header>
          <Container>
            <Navigation>
              <Logo>Logo</Logo>
              <List
                direction="row"
                dense
                mq={{ down: { lg: `display: none;` } }}
              >
                <ListItem>
                  <NavLink href="#" active>
                    Home
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink href="#">Services</NavLink>
                </ListItem>
                <ListItem>
                  <NavLink href="#">About us</NavLink>
                </ListItem>
                <ListItem>
                  <NavLink href="#">Contact</NavLink>
                </ListItem>
              </List>
              <FlexContainer alignItems="center">
                <FlexContainer dropShadow>
                  <Button startIcon={<PhoneIcon width={15} />} fontSize="300">
                    (+1) 943-888-609
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    pill
                    mq={{ down: { md: `display: none;` } }}
                  >
                    Get in touch
                  </Button>
                </FlexContainer>
                <BarIcon open={navOpen} setOpen={setNavOpen} />
                <NavMenu navOpen={navOpen} />
              </FlexContainer>
            </Navigation>
          </Container>
        </Header>
        <HeroSection>
          <Container>
            <Typography as="h1">
              Bringing cars <Highlight>back to life.</Highlight>
            </Typography>
            <Typography as="h2" mb="lg" mq={{ up: { lg: `width: 60%` } }}>
              Labore ad minim labore eiusmod id tempor nostrud est. Consectetur
              ad ad consequat aliqua quis.
            </Typography>
            <Button
              endIcon={<ArrowIcon />}
              variant="contained"
              size="large"
              uppercase
            >
              Contact us
            </Button>
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
            <ServiceSectionGrid>
              {serviceCardData.map(({ service, description, image }) => (
                <ServiceCard>
                  <ServiceCardImage src={image} />
                  <ServiceCardText>
                    <Typography as="h3" uppercase mb="sm">
                      {service}
                    </Typography>
                    <Divider fullWidth gutterBottom />
                    <Typography>{description} </Typography>
                  </ServiceCardText>
                </ServiceCard>
              ))}
            </ServiceSectionGrid>
          </Container>
        </Section>
        <Section>
          <Container disableRightGutter>
            <AboutSectionGrid>
              <Box
                css={`
                  grid-area: heading;
                `}
              >
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
              </Box>
              <Box
                css={`
                  grid-area: text;
                  align-self: end;
                  padding-right: ${({ theme }) => theme.spacing.xl};
                `}
              >
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
              </Box>
              <ImageWithShape />
              <img
                src={carRearEndImage}
                alt="Rear-end of classic car"
                css={`
                  grid-area: img2;
                  max-width: 100%;
                `}
              />
            </AboutSectionGrid>
          </Container>
        </Section>
        <Section>
          <Container>
            <ContactSectionGrid>
              <Box />
              <Box>
                <ContactCard>
                  <Typography as="h1" mb="md" css="white-space: nowrap">
                    Let's talk.
                  </Typography>
                  <ContactForm />
                </ContactCard>
              </Box>
            </ContactSectionGrid>
          </Container>
        </Section>
        <Footer>
          <Container>
            <FooterGrid>
              <Logo mq={{ down: { sm: `text-align: center;` } }}>Logo</Logo>
              <FooterNav py="lg">
                <NavSection>
                  <Typography
                    as="h3"
                    fontSize="400"
                    fontWeight="semi-bold"
                    uppercase
                    mb="md"
                  >
                    Company
                  </Typography>
                  <List>
                    <ListItem>
                      <Link>Services</Link>
                    </ListItem>
                    <ListItem>
                      <Link>About us</Link>
                    </ListItem>
                    <ListItem>
                      <Link>Contact</Link>
                    </ListItem>
                  </List>
                </NavSection>
                <NavSection>
                  <Typography
                    as="h3"
                    fontSize="400"
                    fontWeight="semi-bold"
                    uppercase
                    mb="md"
                  >
                    Legal
                  </Typography>
                  <List>
                    <ListItem>
                      <Link>License</Link>
                    </ListItem>
                    <ListItem>
                      <Link>Privacy Policy</Link>
                    </ListItem>
                  </List>
                </NavSection>
                <NavSection>
                  <Typography
                    as="h3"
                    fontSize="400"
                    fontWeight="semi-bold"
                    uppercase
                    mb="md"
                  >
                    Contact
                  </Typography>
                  <List>
                    <ListItem>
                      <Typography fontSize="300">(+1) 943-888-609</Typography>
                    </ListItem>
                    <ListItem>
                      <Typography>company@gmail.com</Typography>
                    </ListItem>
                  </List>
                </NavSection>
              </FooterNav>
              <Box
                my="lg"
                css="grid-area: newsletter;"
                mq={{
                  down: { sm: `text-align: center;` },
                }}
              >
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
                fullWidth
                thickness="0.5px"
                gutterBottom
                css="grid-area: divider"
              />
              <FooterBottom mt="md" mb="lg">
                <Typography fontSize="300">
                  &copy;2022 Company. All rights reserved
                </Typography>
                <FlexContainer dropShadow>
                  <Box mr="lg" mq={{ down: { md: "display: none;" } }}>
                    <Typography css="white-space: nowrap;">
                      Find us on
                    </Typography>
                  </Box>
                  <SocialLinkList />
                </FlexContainer>
              </FooterBottom>
            </FooterGrid>
          </Container>
        </Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
