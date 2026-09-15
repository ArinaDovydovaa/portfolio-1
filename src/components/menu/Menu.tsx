import styled from 'styled-components';

type MenuPropsType = {
  menuItems: Array<string>
}

export const Menu = (props: MenuPropsType) => {
  return (
    <StyledMenu>
      <ul>
        {props.menuItems.map((item, index) => {
          return (
            <li key={index}>
              <a href="">{item}</a>
            </li>
          )
        })}
      </ul>
    </StyledMenu>
  )
}

const StyledMenu = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    gap: 30px;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 18px;
  }
`