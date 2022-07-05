import InputField from "./InputField";
import planeIcon from "assets/icons/plane.svg";
import StyledNewsletterForm from "./NewsletterForm.styled";

const NewsletterForm = (props) => {
  return (
    <StyledNewsletterForm>
      <InputField outlineDisabled pill placeholder="Enter your email" />
      <button>
        <img src={planeIcon} alt="plane icon" />
      </button>
    </StyledNewsletterForm>
  );
};

export default NewsletterForm;
