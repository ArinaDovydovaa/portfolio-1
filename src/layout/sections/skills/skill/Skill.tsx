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
        <Icon
          width={48}
          height={48}
        />
      </IconWrapper>
      <SkillTitle>{props.title}</SkillTitle>
      <SkillText>{props.description}</SkillText>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;

  background: ${theme.colors.primaryBg};
  border: 1px solid #ebebeb;
  border-radius: 14px;
  transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
  overflow: hidden;

  &:hover {
    transform: translateY(-3px);
    border-color: ${theme.colors.borderHover};
    box-shadow: ${theme.colors.shadowSm}
  }
`

const IconWrapper = styled.div`
  width: 68px;
  height: 68px;
  display: grid;
  place-items: center;
  margin-bottom: 16px;
  border-radius: 12px;
  background: ${theme.colors.secondaryBg};
  transition: background .25s ease;

  ${StyledSkill}:hover & {
    background: ${theme.colors.tertiaryBg};
  }


`
const SkillTitle = styled.h3`
  margin: 0 0 6px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 1.3;
`
const SkillText = styled.p`
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  min-height: calc(13px * 1.5 * 2); /* 2 строки — выравнивает низ карточек */
`


