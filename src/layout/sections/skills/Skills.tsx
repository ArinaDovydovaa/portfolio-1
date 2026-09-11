import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Icon} from '../../../components/icon/Icon';
import {SectionTitle} from '../../../components/SectionTitle';
import {Skill} from './skill/Skill'


export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>Skills</SectionTitle>
      <FlexWrapper wrap={"wrap"} justify={"space-between"}>
        <Skill  iconId={"telegram"}
                title= {"html"}
                description={"consectetur adipiscing elit duis tristique"}/>
        <Skill  iconId={"telegram"}
                title= {"html"}
                description={"consectetur adipiscing elit duis tristique"}/>
        <Skill  iconId={"telegram"}
                title= {"html"}
                description={"consectetur adipiscing elit duis tristique"}/>
        <Skill  iconId={"telegram"}
                title= {"html"}
                description={"consectetur adipiscing elit duis tristique"}/>
        <Skill  iconId={"telegram"}
                title= {"html"}
                description={"consectetur adipiscing elit duis tristique"}/>
        <Skill  iconId={"telegram"}
                title= {"html"}
                description={"consectetur adipiscing elit duis tristique"}/>
      </FlexWrapper>
    </StyledSkills>
  );
};


const StyledSkills = styled.section`
  background-color: blanchedalmond;
  min-height: 100vh;
`

