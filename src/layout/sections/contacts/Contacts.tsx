import styled from 'styled-components';
import {SectionTitle} from '@/components/SectionTitle.tsx'
import {SocialList} from '@/components/socialList/SocialList.tsx';
import TelegramIcon from '../../../assets/icons/telegram.svg?react'
import GmailIcon from '../../../assets/icons/gmail.svg?react'
import {Button} from "@/components/Button.tsx";

const socialItems = [
  {
    icon: TelegramIcon,
    href: 'https://t.me/Arina_Dovydova',
    label: 'telegram',
  },
  {
    icon: GmailIcon,
    href: 'https://t.me/Arina_Dovydova',
    label: 'Gmail',
  },
];

export const Contact = () => {
  return (
    <StyledContacts>
      <SectionTitle>Let’s work together</SectionTitle>
      <p>I’m available for freelance work. Have any projects in your mind? Just feel free to contact me</p>
      <SocialList items={socialItems} />


      <StyledForm>
        <Field placeholder={"name"} />
        <Field placeholder={"subject"} />
        <Field
          placeholder={"message"}
          as={"textarea"}
        />
        <Button type="submit">Send message</Button>
      </StyledForm>
    </StyledContacts>
  );
};


const StyledContacts = styled.section`
  min-height: 50vh;

`
const StyledForm = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
`
const Field = styled.input`

`