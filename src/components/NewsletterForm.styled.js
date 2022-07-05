import styled from "styled-components";

const StyledNewsletterForm = styled.form`
  position: relative;

  & > button {
    position: absolute;
    right: 0;
    top: 0;
    width: 50px;
    height: 100%;
    background-color: ${({ theme }) => theme.palette.primary.main};
    padding: 0.45rem;
    border-bottom-left-radius: 500px;
    border-bottom-right-radius: 500px;
    border-top-right-radius: 500px;
  }
`;

export default StyledNewsletterForm;
