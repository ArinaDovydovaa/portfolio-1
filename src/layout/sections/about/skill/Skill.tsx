import type {ComponentType, SVGProps} from 'react';
import styled from 'styled-components';
import {theme} from '@/styles/Theme.ts';

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
  top: calc(100% + 14px);
  z-index: 10;

  width: 150px;
  padding: 20px;

  background-color: ${theme.colors.primaryBg};
  border-radius: 14px;
  box-shadow: 0 18px 45px rgba(37, 37, 37, 0.18);

  opacity: 0;
  visibility: hidden;
  transform: translate(-50%, -8px);

  transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 100%;
    top: auto;
    transform: translateX(-50%);

    width: 0;
    height: 0;

    border-width: 0 7px 7px 7px;
    border-style: solid;
    border-color: transparent transparent ${theme.colors.tertiaryBg} transparent;
  }

  @media ${theme.media.tablet} {
    width: 120px;
    padding: 12px;
  }
  @media ${theme.media.mobile} {
    width: 90px;
    padding: 10px;
  }

`;

const StyledSkill = styled.div`
  position: relative;
  width: 75px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.primaryBg};
  border: 1px solid ${theme.colors.border};
  border-radius: 18px;
  cursor: pointer;

  transition: border-color 0.3s ease, background-color 0.3s ease;

  &:hover {
    background-color: ${theme.colors.accentSofter};
    border-color: ${theme.colors.border};
  }

  &:hover ${Tooltip} {
    opacity: 1;
    visibility: visible;
    transform: translate(-50%, 0);
  }

  @media ${theme.media.desktop} {
    width: 68px;
    height: 68px;
    border-radius: 16px;
  }
  @media ${theme.media.tablet} {
    width: 58px;
    height: 58px;
  }
  @media ${theme.media.mobile} {
    width: 42px;
    height: 42px;
    border-radius: 12px;
  }
`;


const IconWrapper = styled.div`
  width: 50px;
  height: 50px;

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  @media ${theme.media.desktop} {
    width: 42px;
    height: 42px;
  }
  @media ${theme.media.tablet} {
    width: 36px;
    height: 36px;
  }
  @media ${theme.media.mobile} {
    width: 26px;
    height: 26px;
  }
`

const SkillTitle = styled.h3`
  font-size: 20px;
  text-align: left;
  color: ${theme.colors.darkTitleColor};
  opacity: 0.75;

  @media ${theme.media.tablet} {
    font-size: 16px;
  }
  @media ${theme.media.mobile} {
    font-size: 12px;
  }

`
const SkillText = styled.p`
  text-align: left;
  font-size: 16px;

  @media ${theme.media.tablet} {
    font-size: 12px;
  }
  @media ${theme.media.mobile} {
    font-size: 10px;
  }
`


