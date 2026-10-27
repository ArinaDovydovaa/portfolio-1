import styled from 'styled-components';
import {SectionTitle} from '@/components/SectionTitle';
import {SocialList} from '@/components/socialList/SocialList';
import {ButtonAccent} from '@/components/ButtonAccent';
import {Container} from '@/components/Container';
import {theme} from '@/styles/Theme';
import TelegramIcon from '@/assets/icons/telegram.svg?react';
import GmailIcon from '@/assets/icons/mail.svg?react';
import VkIcon from '@/assets/icons/vk-icon.svg?react';

const socialItems = [
  {icon: TelegramIcon, href: 'https://t.me/Arina_Dovydova', label: 'Telegram'},
  {icon: VkIcon, href: 'https://vk.ru/id183793786', label: 'ВКонтакте'},
  {icon: GmailIcon, href: 'mailto:arina.dovydova95@gmail.com', label: 'Gmail'},
];

export const Contacts = () => {
  return (
    <StyledContacts id="contact">
      <Container>
        <ContactContent>
          <ContactLabel>ЕСТЬ ИДЕЯ ПРОЕКТА?</ContactLabel>
          <SectionTitle
            $align="center"
            $variant="light"
          >Давайте работать вместе</SectionTitle>
          <ContactText>Открыта к новым проектам и сотрудничеству. Расскажите о своей идее — обсудим интерфейс и детали.</ContactText>
          <ButtonAccent
            as="a"
            href="mailto:arina.dovydova95@gmail.com"
          >Написать мне ↗</ButtonAccent>
          <SocialList items={socialItems} />
        </ContactContent>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`background: ${theme.colors.darkBg};`;
const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  svg {
    width: 24px;
    height: 24px;
  }

  ul {
    margin-top: 30px;
    gap: ${theme.spacing.lg};
  }

  ${SectionTitle} {
    margin-bottom: 24px;
  }
`;
const ContactLabel = styled.span`
  margin-bottom: 20px;
  color: ${theme.colors.accentColor};
  font-size: 11px;
  letter-spacing: 0.16em;
`;
const ContactText = styled.p`
  max-width: 440px;
  margin-bottom: 30px;
  color: ${theme.colors.textMuted};
  font-size: 16px;
`;
