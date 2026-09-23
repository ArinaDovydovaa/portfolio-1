import styled from 'styled-components';
import {theme} from "@/styles/Theme.ts";

type MenuPropsType = {
  menuItems: Array<string>
}

export const TabMenu = (props: MenuPropsType) => {
  return (
    <StyledTabMenu>
      <ul>
        {props.menuItems.map((item, index) => {
          return (
            <ListItem key={index}>
              <Button type="button">{item}</Button>
            </ListItem>
          )
        })}
      </ul>
    </StyledTabMenu>
  )
}

const StyledTabMenu = styled.nav`
  margin-bottom: 20px;

  ul {
    display: flex;
    gap: 30px;
    flex-direction: row;
    justify-content: center;

  }`

const ListItem = styled.li`

`
const Button = styled.button`
  display: inline-block;

  font-size: 20px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  padding: 5px;
  color: ${theme.colors.font};

  border: 1px solid transparent;
  border-radius: 2px;
  transition: transform 0.2s ease,
  border-color 0.2s ease,
  box-shadow 0.2s ease;

  &:hover {
    border-color: #868686;
    transform: translateY(-3px) scale(1.06);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.16);
  }
`