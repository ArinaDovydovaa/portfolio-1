import logo from './myLogo.png';
import styled from 'styled-components';
import {theme} from "@/styles/Theme.ts";
import mobileLogo from './logo-mobile.png';

export const Logo = () => {
  return (
    <LogoLink href="#home">
      <DesktopLogo
        src={logo}
        alt="Arina Dovydova"
      />

      <MobileLogo
        src={mobileLogo}
        alt="Arina Dovydova"
      />
    </LogoLink>
  );
};

const LogoLink = styled.a`
  display: inline-flex;
  align-items: center;
  height: 100%;

`

const DesktopLogo = styled.img`
  width: auto;
  height: 36px;
  display: block;
  object-fit: contain;

  @media ${theme.media.desktop} {
    height: 28px;
  }
  @media ${theme.media.tablet} {
    display: none;
  }
  @media ${theme.media.mobile} {
    display: none;
  }
`;

const MobileLogo = styled.img`
  display: none;
  width: auto;
  height: 100%;
  object-fit: contain;

  @media ${theme.media.tablet} {
    display: block;
  }
  @media ${theme.media.mobile} {
    display: block;
  }
`;

