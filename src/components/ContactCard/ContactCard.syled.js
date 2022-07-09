import styled from "styled-components";

const ContactCard = styled.div`
  box-shadow: ${({ theme }) => theme.shadow.boxShadow[0]};
  background-color: #fff;
  padding-block: ${({theme}) => theme.spacing.lg};
  padding-inline: ${({theme}) => theme.spacing.xl};
  margin-block: 15%;
`;

export default ContactCard;
