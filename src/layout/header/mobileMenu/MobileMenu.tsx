import styled, {css} from 'styled-components'
import {theme} from "@/styles/Theme.ts";


export const MobileMenu = (props: { menuItems: Array<string> }) => {

  const isOpen = false;

  return (
    <StyleMobileMenu>
      <BurgerButton $isOpen={isOpen}><span /></BurgerButton>
      <MobileMenuPopup $isOpen={isOpen}>
        <ul>
          {props.menuItems.map((item, index) => {
            return (
              <ListItem key={index}>
                <Link href=" ">{item}</Link>
              </ListItem>)
          })}
        </ul>
      </MobileMenuPopup>
    </StyleMobileMenu>
  );
};

const StyleMobileMenu = styled.nav`
  display: none;

  @media ${theme.media.tablet} {
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }
`;

const MobileMenuPopup = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;

  width: 100vw;
  min-height: 100vh;

  display: ${({$isOpen}) => ($isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;

  background-color: rgba(30, 30, 30, 0.9);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 34px;
  }
`
const BurgerButton = styled.button<{ $isOpen: boolean }>`
  position: relative;
  z-index: 10000;

  width: 44px;
  height: 44px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background-color: transparent;
  cursor: pointer;

  @media ${theme.media.mobile} {
    width: 40px;
    height: 40px;
  }

  span {
    position: relative;
    display: block;

    width: 26px;
    height: 2px;

    background-color: ${theme.colors.lightTitleColor};
    transition: background-color 0.3s ease;

    ${({$isOpen}) =>
      $isOpen &&
      css`
        background-color: transparent;
      `}
    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 0;

      width: 100%;
      height: 2px;

      background-color: ${theme.colors.lightTitleColor};
      transition: transform 0.3s ease, top 0.3s ease;
    }

    &::before {
      top: -9px;

      ${({$isOpen}) =>
        $isOpen &&
        css`
          top: 0;
          transform: rotate(45deg);
        `}
    }

    &::after {
      top: 9px;

      ${({$isOpen}) =>
        $isOpen &&
        css`
          top: 0;
          transform: rotate(-45deg);
        `}
    }
  }
`;

const Link = styled.a`
  font-family: "Source Code Pro", sans-serif;
  font-weight: 400;
  font-size: 30px;
  text-align: center;
  color: ${theme.colors.lightTitleColor};
`

const ListItem = styled.li`
`

