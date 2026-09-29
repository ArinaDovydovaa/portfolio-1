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
import {Text} from "@/components/Text.tsx";


export const About = () => {
  return (
    <StyledAbout id="about">
      <Container>
        <SectionTitle align="left">Обо мне</SectionTitle>

        <AboutGrid>
          <AboutContent>
            <Text>
              <Accent>Визуал:</Accent> Создаю адаптивные и аккуратные интерфейсы
              на React и TypeScript. Верстаю по макетам Figma, собираю SPA на Vite,
              пишу компоненты на styled-components.
            </Text>
            <Text><Accent>Структура:</Accent> Уделяю внимание не только внешнему виду, но и структуре:
              переиспользуемые компоненты, предсказуемое поведение, читаемый код.
              Интерфейс должен одинаково хорошо работать на любом экране.</Text>
            <Text>
              <Accent>Результат:</Accent> Ценю чистый код, понятную архитектуру и аккуратность в деталях.
              Веду проекты в GitHub и довожу задачи до результата.
            </Text>
            {/*<Button>Скачать CV</Button>*/}
          </AboutContent>

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

        </AboutGrid>
      </Container>
    </StyledAbout>
  );
};

const StyledAbout = styled.section`
  padding: 150px 0;
  background-color: ${theme.colors.secondaryBg};
`
const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.8fr);
  gap: 60px;
  align-items: center;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`
const AboutContent = styled.div`
  max-width: 750px;
`
const Accent = styled.span`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 0.005em;
  color: ${theme.colors.darkTitleColor};
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
`

