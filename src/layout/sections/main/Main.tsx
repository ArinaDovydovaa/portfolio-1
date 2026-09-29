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
          <MainIntro>Привет, я Арина </MainIntro>
          <MainTitle> Frontend- <MainSpan>разработчик</MainSpan></MainTitle>
          <ButtonAccent>связаться</ButtonAccent>
        </MainContent>
      </Container>
    </StyledMain>
  );
};
const StyledMain = styled.section`
  padding: 0;
  aspect-ratio: 1672 / 942;

  background-image: url(${photo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;

    // @media ${theme.media.tablet} {
  //   background-size: contain;
    //   background-color: ${theme.colors.darkBg};
  // }

  @media screen and (max-width: 640px) {
    aspect-ratio: 576 / 600;
    background-position: center;
  }

`
const MainContent = styled.div`
  max-width: 600px;

`
const MainIntro = styled.span`
  color: ${theme.colors.lightTitleColor};
  font-weight: 700;
  font-size: 65px;
  line-height: 1.12682;
  letter-spacing: 0.02em;
`

const MainTitle = styled.h1`
  color: ${theme.colors.accentColor};
  font-weight: 700;
  font-size: 70px;
  line-height: 1.12682;
  letter-spacing: 0.02em;
  margin-bottom: 70px;
`

const MainSpan = styled.span`
  color: ${theme.colors.lightTitleColor};
  font-weight: 650;
  font-size: 70px;
  line-height: 1.12682;
  letter-spacing: 0.02em;

`





