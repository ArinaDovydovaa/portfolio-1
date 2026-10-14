import styled from 'styled-components';
import {theme} from "@/styles/Theme.ts";

type SectionTitlePropsType = {
  align?: 'center' | 'left';
  variant?: 'dark' | 'light';
  lineWidth?: string;
};

export const SectionTitle = styled.h2<SectionTitlePropsType>`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: ${({align}) => align === 'left' ? 'flex-start' : 'center'};
  gap: 14px;

  margin: ${({align}) => align === 'left' ? '0 0 48px' : '0 auto 36px'};

  color: ${({variant}) =>
    variant === 'light'
      ? theme.colors.lightTitleColor
      : theme.colors.darkTitleColor};

  font-weight: 600;
  font-size: ${theme.sizes.sectionTitle};
  line-height: 1.05;

  &::after {
    content: "";
    width: ${({lineWidth, align}) =>
      lineWidth || (align === "left" ? "clamp(180px, 22vw, 420px)" : "clamp(260px, 39vw, 750px)")};
    max-width: calc(100vw - 40px);
    height: 2px;

    margin-left: ${({align}) => align === 'left' ? '-15px' : 0};

    background: linear-gradient(
      90deg,
      ${theme.colors.accentColor} 0%,
      ${theme.colors.accentSoft} 70%,
      transparent 100%
    );
  }


  @media ${theme.media.desktop} {

    margin-bottom: ${({align}) => align === 'left' ? '44px' : '36px'};

    &::after {
      width: ${({align}) => align === 'left' ? '320px' : '480px'};
    }
  }

  @media ${theme.media.tablet} {

    gap: 12px;
    margin-bottom: ${({align}) => align === 'left' ? '36px' : '30px'};

    &::after {
      width: ${({align}) => align === 'left' ? '200px' : '360px'};
      margin-left: ${({align}) => align === 'left' ? '-5px' : 0};
    }
  }

  @media ${theme.media.mobile} {
    gap: 10px;
    margin-bottom: 28px;

    &::after {
      width: ${({align}) => align === 'left' ? '200px' : '260px'};
    }
  }

`