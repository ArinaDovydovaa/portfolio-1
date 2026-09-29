import styled from 'styled-components';
import {Logo} from "../../components/logo/Logo";
import {HeaderMenu} from "@/layout/header/headerMenu/HeaderMenu";
import {theme} from "@/styles/Theme.ts";
import {MobileMenu} from "@/layout/header/mobileMenu/MobileMenu.tsx";

const items = ["Главная", "Обо мне", "Проекты", "Контакты"]


export const Header = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <HeaderInner>
          <Logo />
          <HeaderMenu menuItems={items} />
          <MobileMenu menuItems={items} />
        </HeaderInner>
      </HeaderContainer>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1000;

  background-color: rgba(30, 30, 30, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
`;

const HeaderContainer = styled.div`
  max-width: 1760px;
  width: 100%;
  margin: 0 auto;
  padding: 20px 40px;


  @media ${theme.media.desktop} {
    padding: 18px 30px;
  }
  @media ${theme.media.tablet} {
    padding: 0 20px;
  }
  @media ${theme.media.mobile} {
    padding: 0 15px;
  }
`
const HeaderInner = styled.div`
  height: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${theme.media.mobile} {
    height: 45px;
  }`