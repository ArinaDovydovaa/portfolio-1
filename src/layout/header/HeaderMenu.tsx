import styled from 'styled-components';
import {theme} from "@/styles/Theme.ts";


export const HeaderMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledHeaderMenu>
      <ul>
        {props.menuItems.map((item, index) => {
          return (
            <ListItem key={index}>
              <Link href="">{item}</Link>
            </ListItem>)
        })}
      </ul>
    </StyledHeaderMenu>
  )
}

const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
`
const ListItem = styled.li`

`
const Link = styled.a`
  color: ${theme.colors.accentTextColor};
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


