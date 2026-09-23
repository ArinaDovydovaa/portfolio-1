import styled from 'styled-components'
import {Logo} from "@/components/logo/Logo.tsx";
import {Menu} from "@/components/menu/Menu.tsx";
import {theme} from "@/styles/Theme.ts";
import {Container} from "@/components/Container.tsx";


export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FooterContent>
          <Logo />
          <Copyright>© {new Date().getFullYear()} Арина Дaвыдова. Все права защищены.</Copyright>
          <MenuCell>
            <Menu />
          </MenuCell>
        </FooterContent>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${theme.colors.titleColor};
  padding: 20px 0;
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
`