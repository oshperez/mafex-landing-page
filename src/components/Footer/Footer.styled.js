import styled from "styled-components";

const Footer = styled.footer`
  background-color: ${({ theme }) => theme.palette.common.grey};
  padding-top: ${({ theme }) => theme.spacing.lg};
`;

export default Footer;
