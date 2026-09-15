import styled from 'styled-components';
import photo from '../../../assets/images/my-photo.webp'

export const Main = () => {
  return (
    <StyledMain>
      <MainContent>
        <MainSpan>Hi, there</MainSpan>
        <MyName>I'm Arina Dovydova</MyName>
        <MainTitle>Front-end Developer</MainTitle>
      </MainContent>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 800px;
  background-image: url(${photo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: end;
`

const MainContent = styled.div`


`


const MainSpan = styled.span`
  color: #dedede;
  font-size: 40px;
`

const MyName = styled.h2`
  font-weight: 500;
  font-size: 70px;
  line-height: 1.12682;
  letter-spacing: 0.02em;
  color: #dedede;
`

const MainTitle = styled.h1`
  font-weight: 700;
  font-size: 70px;
  line-height: 1.12682;
  letter-spacing: 0.02em;
  color: #fba820;
`




