import styled from 'styled-components';
import {theme} from "@/styles/Theme.ts";

export const SectionTitle = styled.h2`
  font-weight: 600;
  font-size: 40px;
  text-align: center;
  color: ${theme.colors.DarkTitleColor};
  padding: 30px 0;
  margin-bottom: 30px;

  position: relative;

  &:before {
    content: '';
    display: inline-block;
    width: 50%;
    height: 1px;
    background-color: ${theme.colors.accentColor};

    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);

  }
`