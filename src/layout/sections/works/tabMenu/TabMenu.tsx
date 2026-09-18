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
              <Link href="">{item}</Link>
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
const Link = styled.a`
  display: inline-block;

  font-size: 20px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  padding: 5px;

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