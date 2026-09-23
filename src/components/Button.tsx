import styled from 'styled-components'
import {theme} from "@/styles/Theme.ts";

export const Button = styled.button`
  //width: 150px;
  //height: 40px;
  padding: 15px;
  background: transparent;
  border: 1px solid ${theme.colors.accentColor};
  border-radius: 34px;
  transition: background-color 0.3s ease;


  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  color: ${theme.colors.primaryBg};
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.02em;
  text-align: center;
  text-transform: uppercase;
`

