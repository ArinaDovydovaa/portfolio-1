import React from 'react';
import styled from 'styled-components';
import {Text} from '../../../../components/Text';

type SkillPropsType = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  description: string
}


export const Skill = (props: SkillPropsType) => {
  const Icon = props.icon;

  return (
    <StyledSkill>
      <Icon
        width={70}
        height={70}
      />
      <SkillTitle>{props.title}</SkillTitle>
      
      <Text>{props.description}</Text>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 30%;
  background-color: beige;
`

const SkillTitle = styled.h3`
`

