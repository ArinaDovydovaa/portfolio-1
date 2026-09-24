import type {ComponentType, SVGProps} from 'react';
import styled from 'styled-components';
import {theme} from "@/styles/Theme.ts";

type SkillPropsType = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string
  description: string
}

export const Skill = (props: SkillPropsType) => {
  const Icon = props.icon;

  return (
    <StyledSkill>
      <IconWrapper>
        <Icon />
      </IconWrapper>

      <SkillContent>
        <SkillTitle>{props.title}</SkillTitle>
        <SkillText>{props.description}</SkillText>
      </SkillContent>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 200px;
  min-height: 96px;
  padding: 18px 20px;

  display: flex;
  align-items: center;
  gap: 16px;

  background-color: ${theme.colors.primaryBg};
  border: 1px solid rgba(37, 37, 37, 0.08);
  border-radius: 16px;
  box-shadow: 0 14px 35px rgba(37, 37, 37, 0.06);

  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 22px 50px rgba(37, 37, 37, 0.1);
  }

`

const IconWrapper = styled.div`
  width: 44px;
  height: 44px;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
`

const SkillContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const SkillTitle = styled.h3`
  text-align: left;
`
const SkillText = styled.p`
  text-align: left;
`


