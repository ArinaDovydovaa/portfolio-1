import React from 'react';
import styled from 'styled-components'
import {SectionTitle} from '../../../components/SectionTitle'
import {Menu} from '../../../components/menu/Menu'
import {FlexWrapper} from '../../../components/FlexWrapper'
import {Work} from './work/Work'
import projImg from '../../../assets/images/img-1.jpg'

const worksItem = ["All", "Landing page", "React", "spa"]

export const Works = () => {
  return (

    <StyledWorks>
      <SectionTitle>Projects</SectionTitle>
      <Menu menuItems={worksItem} />
      <FlexWrapper justify={'space-between'}>
        <Work
          title={"Project Tile goes here"}
          src={projImg}
          text={"his is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
        />
        <Work
          title={"Project Tile goes here"}
          src={projImg}
          text={"his is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
        />
        <Work
          title={"Project Tile goes here"}
          src={projImg}
          text={"his is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
        />
        <Work
          title={"Project Tile goes here"}
          src={projImg}
          text={"his is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
        />
      </FlexWrapper>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`min-height: 30vh;
  background-color: gray;
`

