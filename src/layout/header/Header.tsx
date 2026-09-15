import styled from 'styled-components';
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";

const menuItems = ["About", "Projects", "Contacts"];

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Menu menuItems={menuItems} />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`

  background-color: #323232;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

