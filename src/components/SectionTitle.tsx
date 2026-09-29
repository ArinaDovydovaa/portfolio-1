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

  margin: ${({align}) => align === 'left' ? '0 0 48px' : '0 auto 48px'};

  color: ${({variant}) =>
    variant === 'light'
      ? theme.colors.lightTitleColor
      : theme.colors.darkTitleColor};

  font-weight: 600;
  font-size: 60px;
  line-height: 1.05;

  &::after {
    content: "";
    width: ${({align}) => align === 'left' ? '420px' : '360px'};
    max-width: calc(100vw - 32px);
    height: 2px;

    margin-left: -20px;

    background: linear-gradient(
      90deg,
      ${theme.colors.accentColor} 0%,
      ${theme.colors.accentSoft} 70%,
      transparent 100%
    );
  }

`