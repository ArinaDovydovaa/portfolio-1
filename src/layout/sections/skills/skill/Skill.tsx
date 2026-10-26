import type {ComponentType, SVGProps} from 'react';
import styled from 'styled-components';
import {theme} from '@/styles/Theme';

type SkillPropsType = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

export const Skill = (props: SkillPropsType) => {
  const Icon = props.icon;
  return (
    <StyledSkill title={props.description}>
      <IconWrapper><Icon aria-hidden="true" /></IconWrapper>
      <SkillTitle>{props.title}</SkillTitle>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  padding: 24px 8px;
  border: 1px solid ${theme.colors.border};
  border-radius: 8px;
  background: ${theme.colors.secondaryBg};
  transition: transform 0.25s, border-color 0.25s;
  &:hover { transform: translateY(-3px); border-color: ${theme.colors.accentSoft}; }
`;
const IconWrapper = styled.div`
  width: 42px;
  height: 42px;
  svg { display: block; width: 100%; height: 100%; }
`;
const SkillTitle = styled.h3`
  font-size: 13px;
  font-weight: 600;
  text-align: center;
`;
