import type {ComponentType, SVGProps} from 'react';
import styled from 'styled-components';
import {theme} from '@/styles/Theme';

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

      <Tooltip>
        <SkillTitle>{props.title}</SkillTitle>
        <SkillText>{props.description}</SkillText>
      </Tooltip>
    </StyledSkill>
  );
};


const Tooltip = styled.div`
  position: absolute;
  left: 50%;
  bottom: calc(100% + 14px);
  z-index: 10;

  width: 230px;
  padding: 14px 16px;

  background-color: ${theme.colors.primaryBg};
  border-radius: 14px;
  box-shadow: 0 18px 45px rgba(37, 37, 37, 0.18);

  opacity: 0;
  visibility: hidden;
  transform: translate(-50%, 8px);

  transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translateX(-50%);

    border-width: 7px 7px 0 7px;
    border-style: solid;
    border-color: ${theme.colors.primaryBg} transparent transparent transparent;
  }

`;

const StyledSkill = styled.div`
  position: relative;
  width: 66px;
  height: 66px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.secondaryBg};
  border: 1px solid ${theme.colors.border};
  border-radius: 18px;
  cursor: pointer;

  transition: border-color 0.3s ease, background-color 0.3s ease;

  &:hover {
    background-color: ${theme.colors.primaryBg};
    border-color: ${theme.colors.tertiaryBg};
  }

  &:hover ${Tooltip} {
    opacity: 1;
    visibility: visible;
    transform: translate(-50%, 0);
  }

`;


const IconWrapper = styled.div`
  width: 36px;
  height: 36px;

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
`

const SkillTitle = styled.h3`
  text-align: left;
  color: ${theme.colors.darkTitleColor};
  opacity: 0.75;
`
const SkillText = styled.p`
  text-align: left;
`


