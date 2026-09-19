import styled from 'styled-components'
import {theme} from "@/styles/Theme.ts";

export const Button = styled.button`
  width: 150px;
  height: 40px;
  background: rgba(251, 168, 32, 0.8); // 60%


  color: ${theme.colors.primaryBg};
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.02em;
  text-align: center;
  text-transform: uppercase;
`

