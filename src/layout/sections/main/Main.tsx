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
          <MainTitle> Frontend </MainTitle>
          <MainTitleLine>разработчик</MainTitleLine>
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

  & > ${Container} {
    max-width: none;
    margin: 0;
    padding-bottom: 50px;
    padding-left: 350px;
  }

  @media ${theme.media.desktop} {
    & > ${Container} {
      padding-bottom: 50px;
      padding-left: 300px;
    }
  }

  @media ${theme.media.tablet} {
    aspect-ratio: 768 / 520;
    background-position: 55% center;

    & > ${Container} {
      padding-left: 110px;
      padding-bottom: 45px;
    }
  }

  @media ${theme.media.mobile} {
    aspect-ratio: 576 / 450;
    background-position: 65% center;

    & > ${Container} {
      padding-left: 64px;
      padding-bottom: 50px;
    }
  }
`;


const MainContent = styled.div`
  max-width: 620px;

  @media ${theme.media.desktop} {
    max-width: 500px;
  }

  @media ${theme.media.tablet} {
    max-width: 300px;
  }

  @media ${theme.media.mobile} {
    max-width: 240px;
  }
`

const MainIntro = styled.span`
  display: block;
  color: ${theme.colors.lightTitleColor};
  font-weight: 600;
  font-size: 60px;
  line-height: 1.2;

  @media ${theme.media.desktop} {
    font-size: 45px;
  }

  @media ${theme.media.tablet} {
    font-size: 28px;
  }

  @media ${theme.media.mobile} {
    font-size: 22px;
  }
`

const MainTitle = styled.h1`
  color: ${theme.colors.accentColor};
  font-weight: 700;
  font-size: 110px;
  line-height: 0.95;
  letter-spacing: 0.01em;

  @media ${theme.media.desktop} {
    font-size: 80px;
  }
  @media ${theme.media.tablet} {
    font-size: 50px;
  }
  @media ${theme.media.mobile} {
    font-size: 38px;
  }
`

const MainTitleLine = styled.span`
  display: block;
  margin-bottom: 50px;
  color: ${theme.colors.lightTitleColor};
  font-weight: 600;
  font-size: 75px;
  line-height: 1.2;

  @media ${theme.media.desktop} {
    font-size: 55px;
    margin-bottom: 42px;
  }
  @media ${theme.media.tablet} {
    font-size: 34px;
    margin-bottom: 30px;
  }
  @media ${theme.media.mobile} {
    font-size: 28px;
    margin-bottom: 24px;
  }
`