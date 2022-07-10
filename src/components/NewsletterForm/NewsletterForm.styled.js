import styled from "styled-components";

const StyledNewsletterForm = styled.form`
  position: relative;

  & input:focus-visible {
    outline: 1.5px solid ${({ theme }) => theme.palette.primary.main};
  }

  & > button {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    right: -5px;
    top: -1px;
    width: 50px;
    height: 100%;
    height: calc(100% + 2px);
    padding: 0;
    border-bottom-left-radius: 500px;
    border-bottom-right-radius: 500px;
    border-top-right-radius: 500px;
  }
`;

export default StyledNewsletterForm;
