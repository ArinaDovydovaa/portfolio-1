import styled from 'styled-components';
import {SectionTitle} from '@/components/SectionTitle.tsx'
import {SocialList} from '@/components/socialList/SocialList.tsx';
import TelegramIcon from '../../../assets/icons/telegram.svg?react'
import GmailIcon from '../../../assets/icons/gmail.svg?react'
import VkIcon from '../../../assets/icons/vk.svg?react'
import ZoomIcon from '../../../assets/icons/zoom.svg?react'
import {Button} from "@/components/Button.tsx";
import {Container} from "@/components/Container.tsx";
import {theme} from "@/styles/Theme.ts";

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
    <StyledContacts id="contacts">
      <Container>
        <StyledSectionTitle>Let’s work together</StyledSectionTitle>

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
            <Button type="submit">Отправить</Button>
          </StyledForm>

        </StyledContent>
      </Container>
    </StyledContacts>
  );
};


const StyledContacts = styled.section`
  background-color: ${theme.colors.titleColor};
`
const StyledSectionTitle = styled(SectionTitle)`
  color: ${theme.colors.secondaryTitleColor};
`
const StyledContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  justify-items: center;

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
    font-size: 25px;
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
  background-color: ${theme.colors.secondaryBg};
  border: 1px solid ${theme.colors.font};
  padding: 7px 15px;
  border-radius: 10px;

  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.05em;

  color: ${theme.colors.titleColor};

  &::placeholder {
    color: ${theme.colors.font};
    text-transform: capitalize;
  }

  &:focus-visible {
    outline: 1px solid ${theme.colors.font};
  }
`