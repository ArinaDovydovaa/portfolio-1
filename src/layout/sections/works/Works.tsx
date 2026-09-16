import styled from 'styled-components'
import {SectionTitle} from '@/components/SectionTitle.tsx'
import {Menu} from '@/components/menu/Menu.tsx'
import {FlexWrapper} from '@/components/FlexWrapper.tsx'
import {Work} from './work/Work'
import socialImg from '../../../assets/images/social-img.webp'
import timerImg from '../../../assets/images/timer-img.webp'


const worksItem = ["All", "Landing page", "React", "spa"]

export const Works = () => {
  return (

    <StyledWorks>
      <SectionTitle>Projects</SectionTitle>
      <Menu menuItems={worksItem} />
      <FlexWrapper
        justify={'space-between'}
        wrap={'wrap'}
      >
        <Work
          title={"Social Network"}
          src={socialImg}
          text={"his is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
        />
        <Work
          title={"Timer"}
          src={timerImg}
          text={"his is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
        />
        <Work
          title={"Project Tile goes here"}
          src={socialImg}
          text={"his is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
        />

      </FlexWrapper>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`min-height: 30vh;
  background-color: gray;
`

