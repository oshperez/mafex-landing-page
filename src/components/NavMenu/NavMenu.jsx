import Button from "components/Button/Button";
import NavLink from "components/Link/NavLink.styled";
import List from "components/List/List.styled";
import ListItem from "components/ListItem/ListItem.styled";
import StyledNavMenu from "./NavMenu.styled";

const NavMenu = ({ navOpen }) => {
  return (
    <StyledNavMenu navOpen={navOpen}>
      <List direction="column">
        <ListItem p="sm">
          <NavLink href="#">Home</NavLink>
        </ListItem>
        <ListItem p="sm">
          <NavLink href="#">Services</NavLink>
        </ListItem>
        <ListItem p="sm">
          <NavLink href="#">About us</NavLink>
        </ListItem>
        <ListItem p="sm">
          <NavLink href="#">Contact</NavLink>
        </ListItem>
      </List>
      <Button
        variant="outlined"
        size="small"
        pill
        dropShadow
        mt="lg"
        mq={{ up: { md: `display: none;` } }}
      >
        Get in touch
      </Button>
    </StyledNavMenu>
  );
};

export default NavMenu;
