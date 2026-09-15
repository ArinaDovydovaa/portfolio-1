import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle'
import {Button} from '../../../components/Button'
import {Text} from '../../../components/Text'

export const Slogan = () => {
  return (
    <StyledSlogan>

      <SectionTitle>Let’s work together</SectionTitle>
      <Text>I’m available for freelance work. Have any projects in your mind? Just feel free to contact me</Text>
      <Button type={"button"}>Contact me</Button>
    </StyledSlogan>
  );
};


const StyledSlogan = styled.section`
  min-height: 30vh;
  background-color: darkgray;`