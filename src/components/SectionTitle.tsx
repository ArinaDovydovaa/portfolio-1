import styled from 'styled-components';
import {theme} from '@/styles/Theme';

type SectionTitlePropsType = {
  $align?: 'center' | 'left';
  $variant?: 'dark' | 'light';
};

export const SectionTitle = styled.h2<SectionTitlePropsType>`
  margin-bottom: 36px;
  text-align: ${props => props.$align || 'left'};
  font-size: clamp(32px, 3.2vw, 44px);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.025em;
  color: ${props => props.$variant === 'light' ? theme.colors.lightTitleColor : theme.colors.darkTitleColor};

`;
