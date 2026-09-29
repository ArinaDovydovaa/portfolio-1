import styled from 'styled-components'
import {Logo} from "@/components/logo/Logo";
// import {Menu} from "@/layout/header/headerMenu/HeaderMenu.tsx";
import {theme} from "@/styles/Theme";
import {Container} from "@/components/Container";


export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FooterContent>
          <Logo />
          <Copyright>© {new Date().getFullYear()} Арина Довыдова. Все права защищены.</Copyright>
          <MenuCell>
            {/*<Menu />*/}
          </MenuCell>
        </FooterContent>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${theme.colors.darkBg};
  padding: 40px 0;
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
  color: ${theme.colors.textPrimary};
  font-size: 18px;
`