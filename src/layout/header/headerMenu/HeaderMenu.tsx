import styled from 'styled-components'
import {theme} from "@/styles/Theme.ts";


export const HeaderMenu = (props: { menuItems: Array<string> }) => {

  return (
    <StyledHeaderMenu>
      <ul>
        {props.menuItems.map((item, index) => {
          return <ListItem key={index}>
            <Link href="#">{item}</Link>
          </ListItem>
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

  @media ${theme.media.tablet} {
    display: none;
  }

`
const ListItem = styled.li`
`

const Link = styled.a`
  display: inline-block;
  color: ${theme.colors.lightTitleColor};
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 0.02em;
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


  @media screen and (max-width: 1440px) {
    font-size: 18px;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
  @media screen and (max-width: 576px) {
    font-size: 14px;
    &::after {
      height: 1px;
    }
  }
`
