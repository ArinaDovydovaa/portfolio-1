import styled from 'styled-components';
import {SectionTitle} from '@/components/SectionTitle';
import {Skill} from '@/layout/sections/about/skill/Skill'
import {Container} from "@/components/Container";

import HtmlIcon from '../../../assets/icons/html.svg?react';
import CssIcon from '../../../assets/icons/css.svg?react';
import JsIcon from '../../../assets/icons/js.svg?react';
import ReactIcon from '../../../assets/icons/react.svg?react';
import FigmaIcon from '../../../assets/icons/figma.svg?react';
import GitHubIcon from '../../../assets/icons/github.svg?react';
import StyledComponentsIcon
  from '../../../assets/icons/styled-components.svg?react';
import ViteIcon from '../../../assets/icons/vite.svg?react';
import TypeScriptIcon from '../../../assets/icons/type-script.svg?react';
import {theme} from "@/styles/Theme";


export const Skills = () => {
  return (
    <StyledSkills id="skills">
      <Container>
        <SectionTitle align="left">Навыки</SectionTitle>

        <SkillsGrid>
          <Skill
            icon={HtmlIcon}
            title={"HTML"}
            description={"Семантическая разметка, формы, доступность"}
          />
          <Skill
            icon={CssIcon}
            title={"CSS"}
            description={"Адаптивная верстка, Flexbox, Grid, анимации"}
          />
          <Skill
            icon={JsIcon}
            title={"JavaScript"}
            description={"ES6+, работа с данными, события, асинхронность"}
          />
          <Skill
            icon={TypeScriptIcon}
            title={"TypeScript"}
            description={"Типизация, интерфейсы, дженерики"}
          />
          <Skill
            icon={ReactIcon}
            title={"React"}
            description={"Компоненты, props, state, hooks"}
          />
          <Skill
            icon={ViteIcon}
            title={'Vite'}
            description={'Сборка, dev-сервер, HMR, оптимизация'}
          />
          <Skill
            icon={StyledComponentsIcon}
            title={"Styled-Components"}
            description={"CSS в JS, динамические стили, темизация"}
          />
          <Skill
            icon={FigmaIcon}
            title={"Figma"}
            description={"Работа с макетами, отступами и UI-деталями"}
          />
          <Skill
            icon={GitHubIcon}
            title={"GitHub"}
            description={"Git, ветки, коммиты, pull request"}
          />
        </SkillsGrid>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  padding: 64px 0;
  background-color: ${theme.colors.secondaryBg};
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 64px);
  justify-content: space-between;
  gap: 18px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(5, 64px);
    justify-content: center;
  }

  @media screen and (max-width: 560px) {
    grid-template-columns: repeat(3, 64px);
  }

`


