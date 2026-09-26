import styled from 'styled-components'
import {theme} from "@/styles/Theme.ts";

export const ButtonAccent = styled.button`
  min-width: 198px;
  min-height: 60px;
  padding: 20px 0;

  background: transparent;
  border: 1px solid ${theme.colors.accentColor};
  border-radius: 34px;
  //transition: all 0.3s ease;

  color: ${theme.colors.lightTextColor};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  transition: color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 20px 1px ${theme.colors.accentColor};
  }

  &:active {
    transform: scale(1.05);
    box-shadow: 0 0 20px 1px ${theme.colors.accentColor};
  }
`

