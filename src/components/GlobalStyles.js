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

  p {
    font-size: ${({ theme }) => theme.typography.fontSize400};
  }

  h1 {
    font-size: ${({ theme }) => theme.typography.fontSize800};
    font-weight: ${({ theme }) => theme.typography.fontWeightBold};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }
  
  h2 {
    font-size: ${({ theme }) => theme.typography.fontSize600};
    font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
    margin-bottom: ${({ theme }) => theme.spacing.lg};

  }

  input, textarea {
    font-size: ${({ theme }) => theme.typography.fontSize400};
  }
`;

export default GlobalStyles;
