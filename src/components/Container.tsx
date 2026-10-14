import styled from "styled-components";
import {theme} from "@/styles/Theme.ts";

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 0 80px;
  margin: 0 auto;


  @media ${theme.media.desktop} {
    max-width: 1200px;
    padding: 0 40px;
  }

  @media ${theme.media.tablet} {
    padding: 0 40px;
  }

  @media ${theme.media.mobile} {
    padding: 0 20px;
  }
`