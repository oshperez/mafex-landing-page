import technicianImage from "assets/images/technician.png";
import StyledImageWithShape from "./ImageWithShape.styled";
import ImageWrapper from "./ImageWrapper.styled";

const ImageWithShape = (props) => {
  return (
    <ImageWrapper>
      <StyledImageWithShape
        src={technicianImage}
        alt="Tecnician repairing car"
      />
    </ImageWrapper>
  );
};

export default ImageWithShape;
