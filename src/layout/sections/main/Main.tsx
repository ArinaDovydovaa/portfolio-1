import styled from 'styled-components';
import photo from '../../../assets/images/my-photo.webp'
import {Container} from "@/components/Container.tsx";
import {theme} from "@/styles/Theme.ts";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <MainContent>
          <MainSpan>Hello, I’m</MainSpan>
          <MyName>Arina Dovydova</MyName>
          <MainTitle>Front-end Developer</MainTitle>
        </MainContent>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 640px;
  background-image: url(${photo});
  background-size: cover;
  background-position: top left;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;

  & > ${Container} {
    display: flex;
    justify-content: flex-end; /* контент справа */
  }
`

const MainContent = styled.div`
  
`


const MainSpan = styled.span`
  color: ${theme.colors.accentTextColor};
  font-size: 40px;

`

const MyName = styled.h2`
  font-weight: 600;
  font-size: 50px;
  letter-spacing: 0.02em;
  color: ${theme.colors.accentColor};
`

const MainTitle = styled.h1`
  font-weight: 600;
  font-size: 60px;
  letter-spacing: 0.02em;
  color: ${theme.colors.accentTextColor};

`




