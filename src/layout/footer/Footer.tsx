import styled from 'styled-components'
import {Logo} from "@/components/logo/Logo.tsx";
import {Menu} from "@/components/menu/Menu.tsx";
import {theme} from "@/styles/Theme.ts";


export const Footer = () => {
  return (
    <StyledFooter>
      <FooterContent>
        <Logo />
        <Copyright>© {new Date().getFullYear()} Templates Jungle. All rights reserved</Copyright>
        <MenuCell>
          <Menu />
        </MenuCell>
      </FooterContent>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${theme.colors.titleColor};
  padding: 20px 40px;
`

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 20px;
`
const MenuCell = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Copyright = styled.small`
  color: ${theme.colors.font};
  font-size: 18px;
  white-space: nowrap`