import styled from 'styled-components';
import {Logo} from '@/components/logo/Logo';
import {theme} from '@/styles/Theme';
import {Container} from '@/components/Container';

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FooterContent>
          <FooterLogo>
            <Logo />
          </FooterLogo>
          <Copyright>© 2026 Арина Давыдова. Все права защищены.</Copyright>
          <BackToTop href="#top" aria-label="Вернуться к началу страницы">↑</BackToTop>
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
`;

const FooterContent = styled.div`
  min-height: 44px;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: ${theme.spacing.lg};

  @media ${theme.media.mobile} {
    gap: 10px;
  }
`;

const FooterLogo = styled.div`
  display: inline-flex;
  align-items: center;
  height: 32px;

  a { height: 100%; }
  img { height: 100%; width: auto; }
`;

const Copyright = styled.small`
  color: ${theme.colors.textMuted};
  font-size: 13px;
  line-height: 1.5;
  text-align: center;

  @media ${theme.media.mobile} {
    font-size: 10px;
  }
`;

const BackToTop = styled.a`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${theme.colors.lightBorder};
  border-radius: 50%;
  color: ${theme.colors.lightTitleColor};
  font-size: 24px;
  transition: color 0.25s, border-color 0.25s, transform 0.25s;
  &:hover { color: ${theme.colors.accentColor}; border-color: ${theme.colors.accentColor}; transform: translateY(-3px); }
`;
