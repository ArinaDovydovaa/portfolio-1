import styled from 'styled-components'
import {theme} from "@/styles/Theme.ts";


export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${theme.colors.textPrimary};

  background: transparent;
  border: 1px solid ${theme.colors.border};
  border-radius: 14px;
  cursor: pointer;

  transition: transform .25s ease,
  box-shadow .25s ease,
  border-color .25s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: ${theme.colors.borderHover}
    box-shadow: ${theme.colors.shadowSm}
  }

  &:active {
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.accentColor};
    outline-offset: 2px;
  }
`