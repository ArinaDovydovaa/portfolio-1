import logo from './my-logo.png';
import mobileLogo from './logo-mobile.png';
import styled from 'styled-components';
import {theme} from '@/styles/Theme.ts';

export const Logo = () => {
  return (
    <LogoLink href="#home">
      <DesktopLogo
        src={logo}
        alt="Arina Davydova"
      />

      <MobileLogo
        src={mobileLogo}
        alt="Arina Davydova"
      />
    </LogoLink>
  );
};

const LogoLink = styled.a`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;

  height: clamp(35px, calc(3.125vw - 10px), 50px);

  @media ${theme.media.desktop} {
    height: clamp(28px, calc(1.041667vw + 20px), 35px);
  }
  @media ${theme.media.tablet} {
    height: 44px;
  }

  @media ${theme.media.mobile} {
    height: 40px;
  }
`;

const DesktopLogo = styled.img`
  display: block;
  width: auto;
  height: 100%;
  object-fit: contain;

  @media ${theme.media.tablet} {
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
`;
