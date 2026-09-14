import React from 'react';
import styled from 'styled-components';
import photo from '../../../assets/images/my-photo-1.webp'
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
  min-height: 30vh;
  background: #202020;
`

const Photo = styled.img`
  width: 600px;
  height: 600px;
  object-fit: cover;`

const MainTitle = styled.h1`
  font-weight: 700;
  font-size: 54px;
  line-height: 1.18519;
  letter-spacing: -0.01em;
  color: #dedede;
`
const MyName = styled.h2`
  color: #dedede;
`


