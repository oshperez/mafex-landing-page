import styled from "styled-components";

const ServiceCard = styled.div`
  position: relative;
  min-width: min(320px, 100%);
  min-height: 300px;
  overflow: hidden;
  filter: drop-shadow(${({ theme }) => theme.shadow.dropShadow[1]});
  background-color: #fff;
`;

export const ServiceCardImg = styled.div`
  width: 60%;
  height: 100%;
  background-image: url(${(props) => props.src});
  background-position: 50%;
  background-size: cover;
  clip-path: polygon(25% 0, 100% 0, 60% 100%, 0 100%, 0 60%);
`;

export const ServiceCardTextContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 48%;
  text-align: end;
  padding: 0 1.25em 2em 0;

  & > h2 {
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.typography.fontSize500};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
`;

export default ServiceCard;
