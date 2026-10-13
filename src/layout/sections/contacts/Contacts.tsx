import styled from 'styled-components';
import {SectionTitle} from '@/components/SectionTitle'
import {SocialList} from '@/components/socialList/SocialList';
import TelegramIcon from '../../../assets/icons/telegram.svg?react'
import GmailIcon from '../../../assets/icons/gmail.svg?react'
import VkIcon from '../../../assets/icons/vk.svg?react'
import ZoomIcon from '../../../assets/icons/zoom.svg?react'
import {ButtonAccent} from "@/components/ButtonAccent";
import {Container} from "@/components/Container";
import {theme} from "@/styles/Theme";

const socialItems = [
  {
    icon: TelegramIcon,
    href: 'https://t.me/Arina_Dovydova',
    label: 'telegram',
  },
  {
    icon: GmailIcon,
    href: 'mailto:arina.dovydova95@gmail.com',
    label: 'Gmail',
  },
  {
    icon: VkIcon,
    href: 'https://vk.ru/id183793786',
    label: 'vk',
  },
  {
    icon: ZoomIcon,
    href: 'https://zoom.us/j/your-meeting-id',
    label: 'zoom',
  },

];

export const Contacts = () => {
  return (
    <StyledContacts id="contact">
      <Container>
        <SectionTitle
          align="center"
          variant="light"
        >
          Давайте работать вместе
        </SectionTitle>

        <StyledContent>
          <StyledInfo>
            Я открыта к новым проектам)
            Если вам нужен аккуратный интерфейс с вниманием к деталям — напишите мне.
          </StyledInfo>

          <StyledForm>
            <Field placeholder={"Имя"} />
            <Field placeholder={"Тема"} />
            <Field
              placeholder={"Сообщение"}
              as={"textarea"}
            />
            <ButtonAccent type="submit">Отправить</ButtonAccent>
          </StyledForm>

          <SocialList items={socialItems} />
        </StyledContent>
      </Container>
    </StyledContacts>
  );
};


const StyledContacts = styled.section`
  padding: 150px 0;
  background-color: ${theme.colors.darkBg};
`

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`
const StyledInfo = styled.p`
  text-align: center;
  font-size: 20px;
  max-width: 50%;


  @media ${theme.media.desktop} {
    max-width: 60%;
  }
  @media ${theme.media.tablet} {
    max-width: 70%;
  }

  @media ${theme.media.mobile} {
    max-width: 70%;
  }

`
const StyledForm = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 32px;

  textarea {
    resize: none;
    min-height: 150px;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1);
  }
`
const Field = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${theme.colors.textMuted || '#444'};
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1);

  padding: 12px 0;
  font-size: 16px;
  font-family: inherit;
  color: ${theme.colors.lightTitleColor || '#fff'};
  transition: border-color 0.3s ease;


  &::placeholder {
    color: ${theme.colors.textPrimary};
    text-transform: capitalize;
    padding-left: 10px;
  }

  &:focus-visible {
    outline: 1px solid ${theme.colors.textPrimary};
  }


  @media ${theme.media.desktop} {
  }

  @media ${theme.media.tablet} {
  }

  @media ${theme.media.mobile} {
  }





`