import styled from 'styled-components'
import {SectionTitle} from '@/components/SectionTitle.tsx'
import {TabMenu} from '@/layout/sections/works/tabMenu/TabMenu.tsx'
import {FlexWrapper} from '@/components/FlexWrapper.tsx'
import {Work} from './work/Work'
import socialImg from '../../../assets/images/social-img.webp'
import timerImg from '../../../assets/images/timer-img.webp'
import {Container} from "@/components/Container.tsx";


const worksItem = ["All", "Landing page", "React", "spa"]

export const Works = () => {
  return (

    <StyledWorks>
      <Container>
        <SectionTitle>Works</SectionTitle>
        <TabMenu menuItems={worksItem} />
        <FlexWrapper
          justify={'space-between'}
          align={"flex-start"}
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
      </Container>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`


`

