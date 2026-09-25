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
  width: 250px;
  height: 100%;
  object-fit: contain;
  border-radius: 30%;
`