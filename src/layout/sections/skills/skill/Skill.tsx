import React from 'react';
import styled from 'styled-components';
// import {Text} from '@/components/Text.tsx';

type SkillPropsType = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  // description: string
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
      {/*<Text>{props.description}</Text>*/}
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;


`
const SkillTitle = styled.h3`
  font-size: 16px;
  letter-spacing: 0.01em;

`

