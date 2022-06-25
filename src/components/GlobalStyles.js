import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    color: ${({ theme }) => theme.palette.text.primary};
  }

  ul {
    list-style: none;
  }
  
  a {
    color: ${({ theme }) => theme.palette.text.primary};  
    text-decoration: none;
  }
`;

export default GlobalStyles;
