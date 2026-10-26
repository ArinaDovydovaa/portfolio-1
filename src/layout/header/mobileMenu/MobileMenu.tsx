import styled from 'styled-components';
import {theme} from '@/styles/Theme';

type MenuItemType = {title: string; href: string};

// details/summary открывают меню без обработчиков JavaScript.
export const MobileMenu = (props: {menuItems: MenuItemType[]}) => {
  return (
    <StyledMobileMenu>
      <BurgerButton aria-label="Открыть или закрыть меню">
        <span /><span /><span />
      </BurgerButton>
      <MobileMenuPopup aria-label="Мобильная навигация">
        <ul>
          {props.menuItems.map(item => (
            <li key={item.href}><Link href={item.href}>{item.title}</Link></li>
          ))}
        </ul>
      </MobileMenuPopup>
    </StyledMobileMenu>
  );
};

const BurgerButton = styled.summary`
  width: 44px;
  height: 44px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border: 1px solid ${theme.colors.lightBorder};
  border-radius: 50%;
  color: ${theme.colors.lightTextColor};
  cursor: pointer;
  list-style: none;
  transition: border-color 0.25s, background-color 0.25s;
  &::-webkit-details-marker { display: none; }
  &:hover { border-color: ${theme.colors.accentColor}; background: ${theme.colors.lightHover}; }
  &:focus-visible { outline: 2px solid ${theme.colors.accentColor}; outline-offset: 5px; }
  span {
    width: 20px;
    height: 1px;
    background: currentColor;
    transition: transform 0.25s, opacity 0.25s;
  }
`;
const StyledMobileMenu = styled.details`
  display: none;
  position: relative;
  @media ${theme.media.tablet} { display: block; }
  &[open] ${BurgerButton} {
    border-color: ${theme.colors.accentColor};
    span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
    span:nth-child(2) { opacity: 0; }
    span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
  }
`;
const MobileMenuPopup = styled.nav`
  position: absolute;
  top: calc(100% + 16px);
  right: 0;
  width: min(280px, calc(100vw - 40px));
  padding: 12px;
  background: ${theme.colors.darkBg};
  border: 1px solid ${theme.colors.lightBorderSoft};
  border-radius: 12px;
  box-shadow: 0 16px 36px ${theme.colors.shadowColor};
`;
const Link = styled.a`
  display: block;
  padding: 12px 16px;
  border-radius: 6px;
  color: ${theme.colors.lightTextColor};
  font-size: 17px;
  transition: color 0.25s, background-color 0.25s;
  &:hover { color: ${theme.colors.accentColor}; background: ${theme.colors.lightHover}; }
`;
