import styled from 'styled-components';
import photo from '@/assets/images/main-photo.webp';
import {Container} from '@/components/Container';
import {ButtonAccent} from '@/components/ButtonAccent';
import {theme} from '@/styles/Theme';

export const Main = () => {
  return (
    <StyledMain id="home">
      <Container>
        <MainContent>
          <MainIntro>Привет, я Арина Давыдова</MainIntro>
          <MainTitle>Frontend<span>разработчик</span></MainTitle>
          <MainText>Превращаю идеи в понятные интерфейсы. Люблю аккуратную вёрстку, простую структуру и внимание к деталям.</MainText>
          <MainActions>
            <ButtonAccent as="a" href="#works">Посмотреть проекты ↗</ButtonAccent>
            <ContactLink href="#contact">Связаться со мной →</ContactLink>
          </MainActions>
        </MainContent>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 740px;
  padding-top: 140px;
  display: flex;
  align-items: center;
  background: linear-gradient(90deg, ${theme.colors.heroOverlay}, transparent 75%), url(${photo}) center / cover;

  @media ${theme.media.tablet} {
    min-height: 620px;
    background-position: 60% center;
  }
  @media ${theme.media.mobile} {
    position: relative;
    display: block;
    min-height: auto;
    padding: 340px 0 48px;
    background: ${theme.colors.heroBg};

    /* На телефоне портрет занимает отдельную область над текстом. */
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 340px;
      background: linear-gradient(0deg, ${theme.colors.heroBg}, transparent 32%), url(${photo}) 72% center / cover;
    }

    & > ${Container} { position: relative; }

  }
`;
const MainContent = styled.div`max-width: 560px;`;
const MainIntro = styled.p`
  margin-bottom: 22px;
  color: ${theme.colors.lightTitleColor};
  font-size: 21px;
  @media ${theme.media.mobile} {
    margin-bottom: 14px;
    font-size: 16px;
  }
`;
const MainTitle = styled.h1`
  color: ${theme.colors.accentColor};
  font-size: clamp(46px, 5vw, 72px);
  font-weight: 600;
  letter-spacing: -0.03em;
  span { display: block; color: ${theme.colors.lightTextColor}; font-size: 0.76em; }
  @media ${theme.media.mobile} {
    font-size: clamp(42px, 11vw, 56px);
    line-height: 1.08;
  }
`;
const MainText = styled.p`
  max-width: 350px;
  margin-top: 26px;
  color: ${theme.colors.heroText};
  @media ${theme.media.mobile} {
    max-width: 100%;
    margin-top: 20px;
    font-size: 15px;
    line-height: 1.7;
  }
`;
const MainActions = styled.div`
  margin-top: 34px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${theme.spacing.lg};
  @media ${theme.media.mobile} {
    margin-top: 26px;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    ${ButtonAccent} { width: fit-content; max-width: 100%; }
  }
`;
const ContactLink = styled.a`
  color: ${theme.colors.lightTextColor};
  font-size: 15px;
  @media ${theme.media.mobile} { text-align: center; padding: 4px 0; }
  &:hover { color: ${theme.colors.accentColor}; }
`;
