import styled from "styled-components";
import {theme} from "@/styles/Theme.ts";

export const ButtonAccent = styled.button`
  width: fit-content;

  /* 1440px -> 1920px: 150px -> 186px */
  min-width: clamp(150px, 7.5vw + 42px, 186px);

  /* 1440px -> 1920px: 48px -> 60px */
  height: clamp(48px, 2.5vw + 12px, 60px);

  padding: 0 clamp(28px, 2.1vw, 40px);

  align-self: center;

  background: transparent;
  border: 1px solid ${theme.colors.accentSoft};
  border-radius: 34px;

  color: ${theme.colors.lightTextColor};

  /* 1440px -> 1920px: 14px -> 16px */
  font-size: clamp(14px, 0.4167vw + 8px, 16px);

  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  white-space: nowrap;

  cursor: pointer;

  transition: color 0.3s ease,
  background-color 0.3s ease,
  box-shadow 0.3s ease,
  transform 0.3s ease;

  &:hover {
    box-shadow: 0 0 20px 1px ${theme.colors.accentColor};
  }

  &:active {
    transform: scale(1.05);
    box-shadow: 0 0 20px 1px ${theme.colors.accentColor};
  }

  @media ${theme.media.desktop} {
    /* 768px -> 1440px: 104px -> 150px */
    min-width: clamp(104px, 6.8452vw + 51.4286px, 150px);

    /* 768px -> 1440px: 34px -> 48px */
    height: clamp(34px, 2.0833vw + 18px, 48px);

    padding: 0 clamp(16px, 1.7857vw + 2.2857px, 28px);

    /* 768px -> 1440px: 9px -> 14px */
    font-size: clamp(9px, 0.744vw + 3.2857px, 14px);

    letter-spacing: 1.2px;
  }

  @media ${theme.media.tablet} {
    /* 576px -> 768px: 92px -> 104px */
    min-width: clamp(92px, 6.25vw + 56px, 104px);

    /* 576px -> 768px: 30px -> 34px */
    height: clamp(30px, 2.0833vw + 18px, 34px);

    padding: 0 clamp(14px, 1.0417vw + 8px, 16px);

    /* 576px -> 768px: 8px -> 9px */
    font-size: clamp(8px, 0.5208vw + 5px, 9px);

    letter-spacing: 1px;
  }

  @media ${theme.media.mobile} {
    min-width: 92px;
    height: 30px;
    padding: 0 14px;
    font-size: 8px;
    letter-spacing: 1px;
  }
`;