import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {SectionTitle} from '../../../components/SectionTitle';
import {Skill} from './skill/Skill'

import HtmlIcon from '../../../assets/icons/html.svg?react';
import CssIcon from '../../../assets/icons/css.svg?react';
import JsIcon from '../../../assets/icons/js.svg?react';
import ReactIcon from '../../../assets/icons/react.svg?react';
import FigmaIcon from '../../../assets/icons/figma.svg?react';
import GinHubIcon from '../../../assets/icons/github.svg?react';



export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>Skills</SectionTitle>
      <FlexWrapper wrap={"wrap"} justify={"space-between"}>
        <Skill
          icon={HtmlIcon}
          title={"html"}
          description={"consectetur adipiscing elit duis tristique"}
        />
        <Skill
          icon={CssIcon}
          title={"css"}
          description={"consectetur adipiscing elit duis tristique"}
        />
        <Skill
          icon={JsIcon}
          title={"js"}
          description={"consectetur adipiscing elit duis tristique"}
        />
        <Skill
          icon={ReactIcon}
          title={"react"}
          description={"consectetur adipiscing elit duis tristique"}
        />
        <Skill
          icon={FigmaIcon}
          title={"figma"}
          description={"consectetur adipiscing elit duis tristique"}
        />
        <Skill
          icon={GinHubIcon}
          title={"GitHub"}
          description={"consectetur adipiscing elit duis tristique"}
        />
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  background: #202020;
  min-height: 50vh;
`

