import styled from 'styled-components';
import photo from '../../../assets/images/main-photo.webp'
import {Container} from "@/components/Container.tsx";
import {theme} from "@/styles/Theme.ts";
import {Button} from "@/components/Button.tsx";

export const Main = () => {
  return (
    <StyledMain id="home">
      <Container>
        <MainContent>
          <MainIntro>Привет, я <Accent>Арина</Accent></MainIntro>
          <MainTitle>Frontend-разработчик</MainTitle>
          <MainSubtitle>Создаю адаптивные и аккуратные интерфейсы на React, TypeScript и styled-components.</MainSubtitle>
          <Button>связаться</Button>
        </MainContent>
      </Container>
    </StyledMain>
  );
};
const StyledMain = styled.section`
  min-height: 700px;
  background-image: url(${photo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
`
const MainContent = styled.div`
  max-width: 550px;
  padding: 0 100px;
`
const MainIntro = styled.p`
  margin-bottom: 12px;
  color: ${theme.colors.secondaryTitleColor};
  font-size: 28px;
  font-weight: 500;
  line-height: 1.2;
`
const Accent = styled.span`
  color: ${theme.colors.accentColor};
  font-weight: 700;
  font-size: 35px;
`
const MainTitle = styled.h1`
  margin: 0;
  color: ${theme.colors.secondaryTitleColor};
  font-size: 68px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.02em;
`
const MainSubtitle = styled.p`
  max-width: 520px;
  margin: 24px 0 32px;
  color: ${theme.colors.font};
  font-size: 18px;
  line-height: 1.65;
`





