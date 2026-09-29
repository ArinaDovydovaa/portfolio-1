import styled from 'styled-components'
import {theme} from "@/styles/Theme.ts";

export const ButtonAccent = styled.button`
  width: auto;
  min-width: 186px;
  align-self: flex-end;
  height: 60px;
  padding: 16px 40px;

  background: transparent;
  border: 1px solid ${theme.colors.accentSoft};
  border-radius: 34px;

  color: ${theme.colors.lightTextColor};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;

  transition: color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;


  &:hover {
    box-shadow: 0 0 20px 1px ${theme.colors.accentColor};
  }

  &:active {
    transform: scale(1.05);
    box-shadow: 0 0 20px 1px ${theme.colors.accentColor};
  }


  @media ${theme.media.desktop} {
    min-width: 150px;
    height: 48px;
    padding: 12px 28px;
    font-size: 12px;
  }
  @media ${theme.media.tablet} {
    min-width: 130px;
    height: 42px;
    padding: 10px 22px;
    font-size: 11px;
  }

  @media ${theme.media.mobile} {
    min-width: 112px;
    height: 38px;
    padding: 9px 18px;
    font-size: 10px;
  }
`

