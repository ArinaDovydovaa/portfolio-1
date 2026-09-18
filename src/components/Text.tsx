import styled from 'styled-components';
import {theme} from "@/styles/Theme.ts";

export const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;
  letter-spacing: 0.01em;
  color: ${theme.colors.font};
`;