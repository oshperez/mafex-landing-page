import styled from "styled-components";

const FooterNav = styled.nav`
  grid-area: nav;
  display: flex;
  justify-content: space-between;
  padding-block: ${({ theme }) => theme.spacing.lg};
`;

export default FooterNav;
