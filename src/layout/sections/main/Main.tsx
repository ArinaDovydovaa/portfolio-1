import styled from 'styled-components';
import photo from '../../../assets/images/main-photo.webp'
import {Container} from "@/components/Container";
import {theme} from "@/styles/Theme";
import {ButtonAccent} from "@/components/ButtonAccent";

export const Main = () => {
  return (
    <StyledMain id="home">
      <Container>
        <MainContent>
          <MainIntro>Привет, я <Accent>Арина</Accent></MainIntro>
          <MainTitle>Frontend-разработчик</MainTitle>
          <MainSubtitle>Создаю адаптивные и аккуратные интерфейсы на React, TypeScript и styled-components.</MainSubtitle>
          <ButtonAccent>связаться</ButtonAccent>
        </MainContent>
      </Container>
    </StyledMain>
  );
};
const StyledMain = styled.section`
  min-height: 720px;
  padding: 0;
  background-image: url(${photo});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
`
const MainContent = styled.div`
  max-width: 560px;
  margin-left: 80px;

`
const MainIntro = styled.h2`
  margin-bottom: 12px;
  color: ${theme.colors.lightTitleColor};
  font-size: 28px;
  font-weight: 600;
  line-height: 1.2;
`
const Accent = styled.span`
  color: ${theme.colors.accentColor};
  font-weight: 700;
  font-size: 35px;
`
const MainTitle = styled.h1`
  color: ${theme.colors.lightTitleColor};
  font-size: 68px;
  line-height: 0.98;
`
const MainSubtitle = styled.p`
  max-width: 460px;
  margin: 24px 0 32px;
  color: ${theme.colors.lightTextColor};
  opacity: 0.75;
  font-size: 18px;
  line-height: 1.7;
`





