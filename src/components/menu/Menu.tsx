import styled from 'styled-components'
import {type MenuItem, menuItems} from './menuItems.ts'
import {theme} from "@/styles/Theme.ts";

type MenuProps = {
  items?: MenuItem[]
  direction?: 'row' | 'column'
}

export const Menu = ({items = menuItems, direction = 'row'}: MenuProps) => {
  return (
    <StyledMenu $direction={direction}>
      {items.map((item) => (
        <li key={item.href}>
          <Link href={item.href}>{item.title}</Link>
        </li>
      ))}
    </StyledMenu>
  )
}

const StyledMenu = styled.ul<{ $direction: 'row' | 'column' }>`
  display: flex;
  flex-direction: ${({$direction}) => $direction};
  gap: 24px;

`

const Link = styled.a`
  display: inline-block;
  color: ${theme.colors.secondaryTitleColor};
  font-size: 18px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 2px;
    width: 0;
    height: 2px;
    background-color: ${theme.colors.accentColor};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`
