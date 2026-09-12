import React from 'react';
import styled from 'styled-components';
import photo from '../../../assets/images/my-photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper
        align={'center'}
        justify={"space-around"}
      >
        <Photo
          src={photo}
          alt=""
        />

        <div>
          <span>Hi, there</span>
          <MyName>I'm Arina Dovydova</MyName>
          <MainTitle>Front-end Developer</MainTitle>
        </div>


      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  min-height: 50vh;
  background: #202020;
`

const Photo = styled.img`
  width: 450px;
  height: 430px;
  object-fit: cover;`

const MainTitle = styled.h1`

`
const MyName = styled.h2`

`


