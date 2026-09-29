import styled from "styled-components";
import {theme} from "@/styles/Theme.ts";

export const Text = styled.p`

  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.75;
  letter-spacing: 0.005em;
  color: ${theme.colors.textPrimary};

  & + & {
    margin-top: 32px;
  }
`


