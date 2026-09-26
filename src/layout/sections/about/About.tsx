import styled from 'styled-components';
import {Container} from '@/components/Container';
import {SectionTitle} from '@/components/SectionTitle';
import {Skill} from '@/layout/sections/about/skill/Skill';
import {theme} from '@/styles/Theme';

import HtmlIcon from '../../../assets/icons/html.svg?react';
import CssIcon from '../../../assets/icons/css.svg?react';
import JsIcon from '../../../assets/icons/js.svg?react';
import TypeScriptIcon from '../../../assets/icons/type-script.svg?react';
import ReactIcon from '../../../assets/icons/react.svg?react';
import ViteIcon from '../../../assets/icons/vite.svg?react';
import StyledComponentsIcon
  from '../../../assets/icons/styled-components.svg?react';
import FigmaIcon from '../../../assets/icons/figma.svg?react';
import GitHubIcon from '../../../assets/icons/github.svg?react';


export const About = () => {
  return (
    <StyledAbout id="about">
      <Container>
        <AboutGrid>
          <AboutContent>
            <SectionTitle align="left">Обо мне</SectionTitle>

            <AboutText>
              Создаю адаптивные и аккуратные интерфейсы
              на React, TypeScript и styled-components.
              Собираю SPA на Vite. Работаю с макетами в Figma.
            </AboutText>

            <AboutText>
              Ценю чистый код и предсказуемые компоненты, проекты веду в GitHub.
            </AboutText>
          </AboutContent>

          <SkillsContent>
            <SkillsGrid>
              <Skill
                icon={HtmlIcon}
                title="HTML"
                description="Семантическая разметка, формы, доступность"
              />
              <Skill
                icon={CssIcon}
                title="CSS"
                description="Адаптивная верстка, Flexbox, Grid, анимации"
              />
              <Skill
                icon={JsIcon}
                title="JavaScript"
                description="ES6+, работа с данными, события, асинхронность"
              />
              <Skill
                icon={TypeScriptIcon}
                title="TypeScript"
                description="Типизация, интерфейсы, дженерики"
              />
              <Skill
                icon={ReactIcon}
                title="React"
                description="Компоненты, props, state, hooks"
              />
              <Skill
                icon={ViteIcon}
                title="Vite"
                description="Сборка, dev-сервер, HMR, оптимизация"
              />
              <Skill
                icon={StyledComponentsIcon}
                title="Styled Components"
                description="CSS in JS, динамические стили, темизация"
              />
              <Skill
                icon={FigmaIcon}
                title="Figma"
                description="Работа с макетами, отступами и UI-деталями"
              />
              <Skill
                icon={GitHubIcon}
                title="GitHub"
                description="Git, ветки, коммиты, pull request"
              />
            </SkillsGrid>
          </SkillsContent>
        </AboutGrid>
      </Container>
    </StyledAbout>
  );
};

const StyledAbout = styled.section`
  padding: 80px;
  background-color: ${theme.colors.secondaryBg};
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
  gap: 72px;
  align-items: center;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

const AboutContent = styled.div``;

const AboutText = styled.p`
  max-width: 520px;
  font-size: 16px;
  line-height: 1.75;

  & + & {
    margin-top: 18px;
  }
`;

const SkillsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;


const SkillsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 64px);
  justify-content: space-between;
  gap: 18px;

`

