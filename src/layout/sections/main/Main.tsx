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
          <MainTitle>Frontend</MainTitle>
          <MainTitleLine>разработчик</MainTitleLine>
          <ButtonBox>
            <ButtonAccent>связаться</ButtonAccent>
          </ButtonBox>
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
    max-width: 1440px;
    margin: 0 auto;
    padding-left: 300px;
    padding-bottom: 50px;
  }

  @media ${theme.media.desktop} {
    & > ${Container} {
      padding-left: clamp(120px, 26.78vw - 85.7px, 300px);
    }
  }

  @media ${theme.media.tablet} {
    aspect-ratio: 768 / 520;
    background-position: 55% center;

    & > ${Container} {
      padding-left: clamp(70px, 26.04vw - 80px, 120px);
      padding-bottom: clamp(55px, -13.02vw + 155px, 80px);
    }
  }

  @media ${theme.media.mobile} {
    aspect-ratio: 576 / 450;
    background-position: 65% center;

    & > ${Container} {
      padding-left: 70px;
      padding-bottom: 80px;
    }
  }

  @media screen and (min-width: 1441px) {
    height: 965px;
    aspect-ratio: auto;

    & > ${Container} {
      padding-left: clamp(
        110px,
        calc(870px - 39.583333vw),
        300px
      );
      padding-right: ${theme.sizes.containerPadding};
    }
  }

  @media screen and (min-width: 1920px) {
    height: auto;
    aspect-ratio: 1920 / 965;
    background-size: cover;
  }
`;

const MainContent = styled.div`
  // 1440px -> 1920px: 420px -> 520px
  width: clamp(420px, 20.8333vw + 120px, 520px);
  aspect-ratio: 1 / 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;


  @media ${theme.media.desktop} {
    // 768px -> 1440px: 300px -> 420px
    width: clamp(300px, 17.8571vw + 162.857px, 420px);

  }
  @media ${theme.media.tablet} {
    // 576px -> 768px: 240px -> 300px
    width: clamp(240px, 31.25vw + 60px, 300px);

  }
  @media ${theme.media.mobile} {
    width: 240px;

  }
`;
const MainIntro = styled.span`
  color: ${theme.colors.lightTextColor};
  font-weight: 600;

  // 1440px -> 1920px: 48px -> 60px
  font-size: clamp(48px, 2.5vw + 12px, 60px);
  line-height: 1.15;

  @media ${theme.media.desktop} {
    // 768px -> 1440px: 30px -> 48px
    font-size: clamp(30px, 2.6786vw + 9.4286px, 48px);
  }

  @media ${theme.media.tablet} {
    // 576px -> 768px: 22px -> 30px
    font-size: clamp(22px, 4.1667vw - 2px, 30px);
  }

  @media ${theme.media.mobile} {
    font-size: 22px;
  }
`;

const MainTitle = styled.h1`
  margin: 0;

  color: ${theme.colors.accentColor};
  font-weight: 700;

  // 1440px -> 1920px: 88px -> 110px
  font-size: clamp(88px, 4.5833vw + 22px, 110px);
  line-height: 0.95;

  @media ${theme.media.desktop} {
    // 768px -> 1440px: 56px -> 88px
    font-size: clamp(56px, 4.7619vw + 19.4286px, 88px);
  }

  @media ${theme.media.tablet} {
    // 576px -> 768px: 40px -> 56px
    font-size: clamp(40px, 8.3333vw - 8px, 56px);
  }

  @media ${theme.media.mobile} {
    font-size: 40px;
  }
`;

const MainTitleLine = styled.span`
  color: ${theme.colors.lightTextColor};
  font-weight: 700;

  font-size: clamp(58px, 3.5417vw + 7px, 75px);
  line-height: 1.05;

  @media ${theme.media.desktop} {
    font-size: clamp(37px, 3.125vw + 13px, 58px);
  }

  @media ${theme.media.tablet} {
    font-size: clamp(26px, 5.7292vw - 7px, 37px);
  }

  @media ${theme.media.mobile} {
    font-size: 26px;
  }
`;

const ButtonBox = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  // 1440px -> 1920px: 42px -> 56px
  margin-top: clamp(42px, 2.9167vw, 56px);

  @media ${theme.media.desktop} {
    // 768px -> 1440px: 30px -> 42px
    margin-top: clamp(30px, 1.7857vw + 16.286px, 42px);
  }
  @media ${theme.media.tablet} {
    // 576px -> 768px: 22px -> 30px
    margin-top: clamp(22px, 4.1667vw - 2px, 30px);
  }
  @media ${theme.media.mobile} {
    margin-top: 22px;
  }
`;