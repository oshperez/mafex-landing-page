import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    color: ${({ theme }) => theme.palette.text.primary};
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
  }

  ul {
    list-style: none;
  }
  
  a {
    color: ${({ theme }) => theme.palette.text.primary};  
    text-decoration: none;
  }

  input, textarea {
    font-size: ${({theme}) => theme.typography.fontSize400};
  }
`;

export default GlobalStyles;
