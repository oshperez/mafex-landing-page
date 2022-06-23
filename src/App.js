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

import phoneIcon from "assets/icons/phone.svg";

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
                <Button variant="contained">Get in touch</Button>
              </FlexContainer>
            </Navigation>
          </Container>
        </Header>
      </div>
    </ThemeProvider>
  );
}

export default App;
