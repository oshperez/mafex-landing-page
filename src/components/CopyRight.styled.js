import styled from "styled-components";

const CopyRight = styled.div`
  grid-area: copyright;
  
  & > p {
    font-size: ${({theme}) => theme.typography.fontSize300};
  }
`
export default CopyRight;