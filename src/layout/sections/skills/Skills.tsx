import styled from 'styled-components';
import {FlexWrapper} from '@/components/FlexWrapper.tsx';
import {SectionTitle} from '@/components/SectionTitle.tsx';
import {Skill} from './skill/Skill'
import {Container} from "@/components/Container.tsx";

import HtmlIcon from '../../../assets/icons/html.svg?react';
import CssIcon from '../../../assets/icons/css.svg?react';
import JsIcon from '../../../assets/icons/js.svg?react';
import ReactIcon from '../../../assets/icons/react.svg?react';
import FigmaIcon from '../../../assets/icons/figma.svg?react';
import GitHubIcon from '../../../assets/icons/github.svg?react';
import {theme} from "@/styles/Theme.ts";


export const Skills = () => {
  return (
    <StyledSkills id="skills">
      <Container>
        <SectionTitle>Навыки</SectionTitle>
        <FlexWrapper
          // wrap={"wrap"}
          justify={"space-between"}
          gap={"10px"}
        >
          <Skill
            icon={HtmlIcon}
            title={"html"}
            description={"Семантическая разметка, формы, доступность"}
          />
          <Skill
            icon={CssIcon}
            title={"css"}
            description={"Адаптивная верстка, Flexbox, Grid, анимации"}
          />
          <Skill
            icon={JsIcon}
            title={"js"}
            description={"ES6+, работа с данными, события, асинхронность"}
          />
          <Skill
            icon={ReactIcon}
            title={"react"}
            description={"Компоненты, props, state, hooks"}
          />
          <Skill
            icon={FigmaIcon}
            title={"figma"}
            description={"Работа с макетами, отступами и UI-деталями"}
          />
          <Skill
            icon={GitHubIcon}
            title={"GitHub"}
            description={"Git, ветки, коммиты, pull request"}
          />
        </FlexWrapper>
      </Container>

    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  background-color: ${theme.colors.primaryBg};
`

