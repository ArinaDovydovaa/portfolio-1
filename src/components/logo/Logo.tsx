import logo from '../../assets/images/myLogo.png';
import styled from 'styled-components';

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
  height: 40px;
  display: block;
  object-fit: contain;
`