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
        <SectionTitle align="left">Обо мне</SectionTitle>

        <AboutCards>
          <AboutItem>
            <AboutItemTitle>Визуал</AboutItemTitle>
            <AboutText>
              Создаю адаптивные и аккуратные интерфейсы на React и TypeScript.
              Работаю с макетами Figma, сетками, отступами и состояниями.
            </AboutText>
          </AboutItem>

          <AboutItem>
            <AboutItemTitle>Структура</AboutItemTitle>
            <AboutText>
              Разбиваю интерфейс на понятные компоненты.
              Слежу за переиспользованием, логикой и читаемостью кода.
            </AboutText>
          </AboutItem>

          <AboutItem>
            <AboutItemTitle>Результат</AboutItemTitle>
            <AboutText>
              Довожу задачи до рабочего состояния.
              Проверяю адаптив, интерактивность и поведение элементов.
            </AboutText>
          </AboutItem>
        </AboutCards>

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
      </Container>
    </StyledAbout>
  );
};

const StyledAbout = styled.section`
  padding: 100px 0;
  background-color: ${theme.colors.secondaryBg};

  @media ${theme.media.desktop} {
    padding: 90px 0;
  }
  @media ${theme.media.tablet} {
    padding: 70px 0;
  }
  @media ${theme.media.mobile} {
    padding: 50px 0;
  }
`

const AboutCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 40px;
  margin-bottom: 60px;
  margin-top: 60px;
  width: 100%;
  margin-inline: auto;

  @media ${theme.media.desktop} {
    gap: 50px;
    
  }
  @media ${theme.media.tablet} {
    grid-template-columns: 1fr;
    gap: 28px;
    margin-bottom: 44px;
  }
  @media ${theme.media.mobile} {
    gap: 24px;
    margin-bottom: 36px;
  }
`;

const AboutItem = styled.div`
`;

const AboutItemTitle = styled.h3`
  margin-bottom: 14px;
  color: ${theme.colors.darkTitleColor};
  font-size: 32px;
  font-weight: 700;
  text-align: left;

  @media ${theme.media.desktop} {
    font-size: 28px;
  }
  @media ${theme.media.tablet} {
    font-size: 22px;
    margin-bottom: 10px;
  }
  @media ${theme.media.mobile} {
    font-size: 18px;
  }

`;

const AboutText = styled.p`
  font-size: 18px;
  line-height: 1.75;

  @media ${theme.media.tablet} {
    font-size: 14px;
    max-width: 520px;
  }
  @media ${theme.media.mobile} {
    max-width: 80%;
    font-size: 12px;
    line-height: 1.65;
  }
`;


const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 75px);
  justify-content: space-between;
  gap: 24px;

  @media ${theme.media.desktop} {
    grid-template-columns: repeat(9, 68px);
    gap: 18px;
  }
  @media ${theme.media.tablet} {
    grid-template-columns: repeat(9, 58px);
    justify-content: center;
    gap: 20px;
  }
  @media ${theme.media.mobile} {
    grid-template-columns: repeat(9, 42px);
    gap: 16px;
  }
`;

