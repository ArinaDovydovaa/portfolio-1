import styled from 'styled-components';
import {Logo} from '@/components/logo/Logo';
import {Container} from '@/components/Container';
import {MobileMenu} from './mobileMenu/MobileMenu';
import {HeaderMenu} from './headerMenu/HeaderMenu';
import {theme} from '@/styles/Theme';

const items = [
  {title: 'Главная', href: '#home'},
  {title: 'Обо мне', href: '#about'},
  {title: 'Проекты', href: '#works'},
  {title: 'Контакты', href: '#contact'},
];

export const Header = () => {
  return (
    <StyledHeader id="top">
      <Container>
        <HeaderInner>
          <Logo />
          <HeaderMenu menuItems={items} />
          <MobileMenu menuItems={items} />
        </HeaderInner>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background: transparent;
`;
const HeaderInner = styled.div`
  padding: 16px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.spacing.lg};

  @media ${theme.media.mobile} {
    padding: 8px 0;
    gap: ${theme.spacing.sm};
  }
`;
