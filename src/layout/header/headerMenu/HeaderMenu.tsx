import styled from 'styled-components';
import {theme} from '@/styles/Theme';

type MenuItemType = { title: string; href: string };

export const HeaderMenu = (props: {menuItems: MenuItemType[]}) => {
  return (
    <StyledHeaderMenu aria-label="Основная навигация">
      <ul>
        {props.menuItems.map(item => (
          <li key={item.href}><Link href={item.href}>{item.title}</Link></li>
        ))}
      </ul>
    </StyledHeaderMenu>
  );
};

const StyledHeaderMenu = styled.nav`
  ul { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 12px 28px; }
  @media ${theme.media.tablet} { display: none; }
`;
const Link = styled.a`
  color: ${theme.colors.lightTitleColor};
  font-size: 16px;
  transition: color 0.25s;
  &:hover { color: ${theme.colors.accentColor}; }
  @media ${theme.media.mobile} { font-size: 14px; }
`;
