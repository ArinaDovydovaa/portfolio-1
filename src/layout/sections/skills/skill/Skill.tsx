import React from 'react';
import styled from 'styled-components';

type SkillPropsType = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  description: string
}


export const Skill = (props: SkillPropsType) => {
  const Icon = props.icon;

  return (
    <StyledSkill>
      <Icon width={70} height={70} />
      <SkillTitle>{props.title}</SkillTitle>
      <SkillText>{props.description}</SkillText>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
width: 30%;
  background-color: beige;
  margin: 10px;
`

const SkillTitle = styled.h3`
`

const SkillText = styled.p`
`