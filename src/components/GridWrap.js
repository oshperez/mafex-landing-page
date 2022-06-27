import styled, { css } from "styled-components";

const GridWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(320px, 100%), 1fr));
  grid-gap: 1.5rem;

  ${(props) =>
    props.mt &&
    css`
      margin-top: ${props.theme.spacing[props.mt]};
    `}
    
  ${(props) =>
    props.mb &&
    css`
      margin-bottom: ${props.theme.spacing[props.mb]};
    `}
`;
export default GridWrap;
