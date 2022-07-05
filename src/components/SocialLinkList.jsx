import Link from "./Link.styled";
import StyledSocialLinkList from "./SocialLinkList.styled";

import { ReactComponent as FacebookIcon } from "assets/icons/facebook.svg";
import { ReactComponent as YoutubeIcon } from "assets/icons/youtube.svg";
import { ReactComponent as TwitterIcon } from "assets/icons/twitter.svg";
import { ReactComponent as InstagramIcon } from "assets/icons/instagram.svg";

const SocialLinkList = (props) => {
  return (
    <StyledSocialLinkList>
      <li>
        <Link href="facebook.com" mr="lg">
          <FacebookIcon />
        </Link>
      </li>
      <li>
        <Link href="youtube.com" mr="lg">
          <YoutubeIcon />
        </Link>
      </li>
      <li>
        <Link href="twitter.com" mr="lg">
          <TwitterIcon />
        </Link>
      </li>
      <li>
        <Link href="instagram.com">
          <InstagramIcon />
        </Link>
      </li>
    </StyledSocialLinkList>
  );
};

export default SocialLinkList;
