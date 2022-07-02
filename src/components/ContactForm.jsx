import StyledContactForm from "components/ContactForm.styled";
import Button from "./Button.styled";
import InputField from "./InputField";

import phoneIcon from "assets/icons/phone.svg";
import envelopeIcon from "assets/icons/envelope.svg";

const ContactForm = (props) => {
  return (
    <StyledContactForm>
      <InputField
        label="Email"
        type="email"
        name="email"
        startIcon={envelopeIcon}
        gutterBottom
        required
      />
      <InputField
        label="Phone"
        type="tel"
        name="phone-number"
        startIcon={phoneIcon}
        gutterBottom
      />
      <InputField label="Message" name="mesage" textarea rows="5" required />
      <Button as="button" type="submit" variant="contained" fullWidth mt="lg">
        Send
      </Button>
    </StyledContactForm>
  );
};

export default ContactForm;
