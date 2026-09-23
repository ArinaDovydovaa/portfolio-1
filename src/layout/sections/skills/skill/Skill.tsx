import type {ComponentType, SVGProps} from 'react';
import styled from 'styled-components';


type SkillPropsType = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string
  description: string
}

export const Skill = (props: SkillPropsType) => {
  const Icon = props.icon;

  return (
    <StyledSkill>
      <Icon
        width={60}
        height={60}
      />
      <SkillTitle>{props.title}</SkillTitle>
      <SkillText>{props.description}</SkillText>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 300px;
  min-height: 200px;
  border: 1px solid #ebebeb;
  box-shadow: 0 2px 40px 0 rgba(187, 187, 187, 0.25);
  background: #fdfdfd;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 15px;
  text-align: center;


`
const SkillTitle = styled.h3`
  font-size: 18px;
`
const SkillText = styled.p``


