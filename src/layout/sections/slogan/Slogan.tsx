import styled from 'styled-components';
import {SectionTitle} from '@/components/SectionTitle.tsx'
import {SocialList} from '@/components/socialList/SocialList.tsx';
import TelegramIcon from '../../../assets/icons/telegram.svg?react'
import GmailIcon from '../../../assets/icons/gmail.svg?react'

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

export const Slogan = () => {
  return (
    <StyledSlogan>
      <SectionTitle>Let’s work together</SectionTitle>
      <p>I’m available for freelance work. Have any projects in your mind? Just feel free to contact me</p>
      <SocialList items={socialItems} />
    </StyledSlogan>
  );
};


const StyledSlogan = styled.section`
  min-height: 30vh;
`