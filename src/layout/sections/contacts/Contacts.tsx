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
          align="left"
          variant="light"
        >
          Давай'те работать вместе
        </SectionTitle>

        <StyledContent>
          <StyledInfo>
            <p>Я открыта к новым проектам)
              Если вам нужен аккуратный интерфейс с вниманием к деталям — напишите мне.
            </p>
            <SocialList items={socialItems} />
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

        </StyledContent>
      </Container>
    </StyledContacts>
  );
};


const StyledContacts = styled.section`
  padding: 80px 0;
  background-color: ${theme.colors.darkBg};
`

const StyledContent = styled.div`
  display: grid;
  grid-template-columns:minmax(0, 1fr) minmax(0, 1fr);
  gap: 48px;
  margin-top: 40px;
`
const StyledInfo = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  p {
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 0.01em;
    text-align: start;
    line-height: 1.6;
    margin: 0;

  }
`
const StyledForm = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 16px;
  margin: 0 auto;

  textarea {
    resize: none;
    height: 150px;
  }
`
const Field = styled.input`
  width: 100%;
  background-color: ${theme.colors.tertiaryBg};
  border: 1px solid ${theme.colors.textMuted};
  padding: 7px 15px;
  border-radius: 10px;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.05em;
  color: ${theme.colors.darkTitleColor};


  &::placeholder {
    color: ${theme.colors.textPrimary};
    text-transform: capitalize;
  }

  &:focus-visible {
    outline: 1px solid ${theme.colors.textPrimary};
  }
`