import styled from 'styled-components'
import {type MenuItem, menuItems} from './menuItems.ts'

type MenuProps = {
  items?: MenuItem[]
  direction?: 'row' | 'column'
}

export const Menu = ({items = menuItems, direction = 'row'}: MenuProps) => {
  return (
    <StyledMenu $direction={direction}>
      {items.map((item) => (
        <li key={item.href}>
          <a href={item.href}>{item.title}</a>
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