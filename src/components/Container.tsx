import styled from "styled-components";
import {theme} from "@/styles/Theme.ts";

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 0 ${theme.sizes.containerPadding};
  margin: 0 auto;


  @media ${theme.media.desktop} {
    max-width: 1200px;
  }
  @media ${theme.media.tablet} {
    max-width: 100%;
  }

  @media ${theme.media.mobile} {
    max-width: 100%;
  }
`