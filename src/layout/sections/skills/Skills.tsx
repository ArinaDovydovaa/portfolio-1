import styled from 'styled-components';
import {FlexWrapper} from '@/components/FlexWrapper.tsx';
import {SectionTitle} from '@/components/SectionTitle.tsx';
import {Skill} from './skill/Skill'
import {Container} from "@/components/Container.tsx";

import HtmlIcon from '../../../assets/icons/html.svg?react';
import CssIcon from '../../../assets/icons/css.svg?react';
import JsIcon from '../../../assets/icons/js.svg?react';
import ReactIcon from '../../../assets/icons/react.svg?react';
import FigmaIcon from '../../../assets/icons/figma.svg?react';
import GitHubIcon from '../../../assets/icons/github.svg?react';
import {theme} from "@/styles/Theme.ts";


export const Skills = () => {
  return (
    <StyledSkills id="skills">
      <Container>
        <SectionTitle>Skills</SectionTitle>
        <FlexWrapper
          // wrap={"wrap"}
          justify={"space-between"}
          gap={"10px"}
        >
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
            icon={GitHubIcon}
            title={"GitHub"}
            description={"consectetur adipiscing elit duis tristique"}
          />
        </FlexWrapper>
      </Container>

    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  background-color: ${theme.colors.primaryBg};
`

