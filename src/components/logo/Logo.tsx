import logo from '../../assets/images/myLogo.png';
import styled from 'styled-components';
import {theme} from "@/styles/Theme.ts";

export const Logo = () => {
  return (
    <LogoLink href="#home">
      <LogoImg
        src={logo}
        alt="Arina Dovydova"
      />
    </LogoLink>
  );
};

const LogoLink = styled.a`
  display: inline-flex;
  align-items: center;
`

const LogoImg = styled.img`
  width: auto;
  height: 36px;
  display: block;
  object-fit: contain;


  @media ${theme.media.desktop} {
    height: 32px;
  }
  @media ${theme.media.tablet} {
    height: 28px;
  }
  @media ${theme.media.mobile} {
    height: 24px;
  }
`