import styled from 'styled-components'
import {theme} from "@/styles/Theme.ts";

export const ButtonAccent = styled.button`
  padding: 15px;
  background: transparent;
  border: 1px solid ${theme.colors.accentColor};
  border-radius: 34px;
  transition: all 0.3s ease;

  color: ${theme.colors.primaryBg};
  font-size: 14px;
  letter-spacing: 0.02em;
  text-align: center;
  text-transform: uppercase;

  &:hover {
    box-shadow: 0 0 20px 1px ${theme.colors.accentColor};
  }

  &:active {
    transform: scale(1.05);
    box-shadow: 0 0 20px 1px ${theme.colors.accentColor};
  }
`

