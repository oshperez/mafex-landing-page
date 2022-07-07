import InputField from "./InputField";
import StyledNewsletterForm from "./NewsletterForm.styled";
import { ReactComponent as PlaneIcon } from "assets/icons/plane.svg";
import Button from "./Button/Button";

const NewsletterForm = (props) => {
  return (
    <StyledNewsletterForm>
      <InputField placeholder="Enter your email" outlineDisabled pill />
      <Button as="button" type="submit" variant="contained">
        <PlaneIcon css="display: flex" />
      </Button>
    </StyledNewsletterForm>
  );
};

export default NewsletterForm;
