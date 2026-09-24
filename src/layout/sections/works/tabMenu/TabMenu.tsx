import styled from 'styled-components';
import {Button} from '@/components/Button.tsx';

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
