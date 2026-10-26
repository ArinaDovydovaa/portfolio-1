import styled from 'styled-components';
import {Container} from '@/components/Container';
import {SectionTitle} from '@/components/SectionTitle';
import {ButtonAccent} from '@/components/ButtonAccent';
import {theme} from '@/styles/Theme';

export const About = () => {
  return (
    <StyledAbout id="about">
      <Container>
        <AboutContent>
          <AboutIntro>
            <SectionTitle>Обо мне</SectionTitle>
            <AboutText>Я Арина, frontend-разработчик. Создаю интерфейсы на React и TypeScript: от первой строки разметки до адаптивной страницы.</AboutText>
            <AboutText>Мне нравится, когда в интерфейсе легко ориентироваться, а в коде — легко разобраться. Поэтому уделяю внимание и деталям вёрстки, и структуре компонентов.</AboutText>
            <ButtonAccent as="a" href="#contact">Обсудить проект ↗</ButtonAccent>
          </AboutIntro>
          <AboutCards>
            <AboutItem>
              <ItemNumber>01</ItemNumber>
              <div><AboutItemTitle>Внимание к визуалу</AboutItemTitle><AboutText>Работаю с макетами Figma, сетками и отступами. Адаптирую страницы под разные экраны.</AboutText></div>
            </AboutItem>
            <AboutItem>
              <ItemNumber>02</ItemNumber>
              <div><AboutItemTitle>Понятная структура</AboutItemTitle><AboutText>Разбиваю интерфейс на небольшие компоненты. Повторяющиеся элементы использую повторно.</AboutText></div>
            </AboutItem>
            <AboutItem>
              <ItemNumber>03</ItemNumber>
              <div><AboutItemTitle>Забота о результате</AboutItemTitle><AboutText>Проверяю читаемость, расположение элементов и поведение вёрстки на телефоне.</AboutText></div>
            </AboutItem>
          </AboutCards>
        </AboutContent>
      </Container>
    </StyledAbout>
  );
};

const StyledAbout = styled.section`background: ${theme.colors.secondaryBg};`;
const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 90px;
  @media ${theme.media.tablet} { grid-template-columns: 1fr; gap: 48px; }
`;
const AboutIntro = styled.div`
  ${ButtonAccent} { margin-top: 28px; }
`;
const AboutText = styled.p`
  font-size: 16px;
  & + & { margin-top: 16px; }
`;
const AboutCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 28px;
`;
const AboutItem = styled.div`
  display: flex;
  gap: 20px;
  padding-bottom: 24px;
  border-bottom: 1px solid ${theme.colors.border};
  &:last-child { padding-bottom: 0; border: 0; }
`;
const ItemNumber = styled.span`
  padding-top: 2px;
  color: ${theme.colors.accentHover};
  font-size: 14px;
`;
const AboutItemTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 22px;
  font-weight: 600;
`;
