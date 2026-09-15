import styled from 'styled-components'
import GmailIcon from '../../assets/icons/icon-gmail.svg?react';

export const Footer = () => {
  return (
    <StyledFooter>
      <Name>Arina Dovydova</Name>
      <SocialList>
        <SocialItem>
          <SocialLink href="mailto:твой-email">
            <GmailIcon
              width={24}
              height={24}
            />
          </SocialLink>

        </SocialItem>

      </SocialList>
      <Copiright>© 2021 Templates Jungle. All rights reserved</Copiright>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`

`
const Name = styled.span``
const SocialList = styled.ul``
const SocialItem = styled.li``
const SocialLink = styled.a``
const Copiright = styled.small``