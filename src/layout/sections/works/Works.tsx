import styled from 'styled-components'
import {SectionTitle} from '@/components/SectionTitle.tsx'
import {TabMenu} from '@/layout/sections/works/tabMenu/TabMenu.tsx'
import {FlexWrapper} from '@/components/FlexWrapper.tsx'
import {Work} from './work/Work'
import socialImg from '../../../assets/images/social-img.webp'
import timerImg from '../../../assets/images/timer-img.webp'
import {Container} from "@/components/Container.tsx";
import {theme} from "@/styles/Theme.ts";


const workItems = ["Все", "Лендинги", "React", "SPA"]

export const Works = () => {
  return (

    <StyledWorks id="works">
      <Container>
        <SectionTitle>Проекты</SectionTitle>
        <TabMenu menuItems={workItems} />
        <FlexWrapper
          justify="center"
          align="flex-start"
          wrap="wrap"
          gap="30px"
        >
          <Work
            title={"Социальная сеть"}
            src={socialImg}
            text={"React-приложение с профилем, диалогами и переиспользуемыми компонентами."}
          />
          <Work
            title={"Таймер"}
            src={timerImg}
            text={"Интерактивный таймер с настройкой времени и отображением обратного отсчета."}
          />
          <Work
            title={"Project Tile goes here"}
            src={socialImg}
            text={"his is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
          />
        </FlexWrapper>
      </Container>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
  background-color: ${theme.colors.secondaryBg};

`

