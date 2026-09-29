import styled from 'styled-components';

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
              <Link href=" ">{item}</Link>
            </ListItem>
          )
        })}
      </ul>
    </StyledTabMenu>
  )
}

const StyledTabMenu = styled.nav`

  ul {
    display: flex;
    gap: 30px;
    justify-content: center;

  }`

const ListItem = styled.li`

`
const Link = styled.a``
