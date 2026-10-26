import styled from 'styled-components';
import {theme} from '@/styles/Theme';

export const ButtonAccent = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 14px 28px;
  border: 1px solid ${theme.colors.accentColor};
  border-radius: 30px;
  background: ${theme.colors.accentColor};
  color: ${theme.colors.darkBg};
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.25s, transform 0.25s, box-shadow 0.25s;

  &:hover { background: ${theme.colors.accentHover}; transform: translateY(-2px); box-shadow: 0 6px 18px ${theme.colors.accentSoft}; }
  &:disabled { cursor: default; opacity: 0.6; }
`;
