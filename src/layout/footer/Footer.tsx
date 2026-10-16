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
          <FooterLogo>
            <Logo />
          </FooterLogo>
          <Copyright>© {new Date().getFullYear()} Арина Давыдова. Все права защищены.</Copyright>
        </FooterContent>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${theme.colors.darkBg};
  padding: 40px 0;

  @media ${theme.media.tablet} {
    padding: 28px 0;
  }
`

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media ${theme.media.tablet} {
    flex-direction: column;
    text-align: center;
  }
`;
const FooterLogo = styled.div`
  display: inline-flex;
  align-items: center;
  height: 30px;

  a {
    height: 100%;
  }

  img {
    height: 100%;
    width: auto;
  }

  @media ${theme.media.tablet} {
    height: 32px;
  }

  @media ${theme.media.mobile} {
    height: 28px;
  }
`;


const Copyright = styled.small`
  color: ${theme.colors.textPrimary};
  font-size: 18px;

  @media ${theme.media.desktop} {
    font-size: 15px;
  }

  @media ${theme.media.mobile} {
    font-size: 12px;
  }
`