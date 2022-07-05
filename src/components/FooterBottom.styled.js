import styled from "styled-components";

const FooterBootom = styled.div`
  grid-area: footer-bottom;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${({ theme }) => theme.spacing.md};
  padding-bottom: ${({ theme }) => theme.spacing.lg};
`;

export default FooterBootom;
