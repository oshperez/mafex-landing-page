import styled from "styled-components";

const StyledNewsletterForm = styled.form`
  position: relative;

  & > button {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 0;
    top: 0;
    width: 50px;
    height: 100%;
    padding: 0;
    border-bottom-left-radius: 500px;
    border-bottom-right-radius: 500px;
    border-top-right-radius: 500px;
  }
`;

export default StyledNewsletterForm;
