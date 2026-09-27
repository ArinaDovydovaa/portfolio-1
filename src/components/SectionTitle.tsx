import styled from 'styled-components';
import {theme} from "@/styles/Theme.ts";

type SectionTitlePropsType = {
  align?: 'center' | 'left';
  variant?: 'dark' | 'light';
};


export const SectionTitle = styled.h2<SectionTitlePropsType>`
  width: fit-content;

  display: flex;
  flex-direction: column;
  align-items: ${({align}) => align === 'left' ? 'flex-start' : 'center'};
  gap: 14px;

  margin: ${({align}) => align === 'left' ? '0 0 30px' : '0 auto 30px'};

  color: ${({variant}) =>
    variant === 'light'
      ? theme.colors.lightTitleColor
      : theme.colors.darkTitleColor};

  font-weight: 600;
  font-size: 60px;
  margin: ${({align}) => align === 'left' ? '0 0 36px' : '0 auto 36px'};


  &::after {
    content: "";
    width: ${({align}) => align === 'left' ? '420px' : '360px'};
    max-width: calc(100vw - 40px);
    height: 2px;

    margin-left: -20px;

    background: linear-gradient(
      90deg,
      ${theme.colors.accentColor} 10%,
      ${theme.colors.accentSoft} 80%,
      transparent 100%
    );
  }

`