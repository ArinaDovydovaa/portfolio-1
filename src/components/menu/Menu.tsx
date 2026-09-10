import React from 'react';
import styled from 'styled-components';

export const Menu = () => {
  return (
    <StyledMenu>
      <ul>
        <li>
          <a href=" ">About</a>
        </li>
        <li>
          <a href=" ">Projects</a>
        </li>
        <li>
          <a href=" ">Contacts</a>
        </li>
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