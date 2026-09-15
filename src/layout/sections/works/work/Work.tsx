import React from 'react';
import styled from 'styled-components'
import {Text} from '../../../../components/Text'

type WorkPropsType = {
  title: string
  text: string
  src: string
}

export const Work = (props: WorkPropsType) => {
  return (
    <StyledWork>
      <Image
        src={props.src}
        alt=""
      />
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
      <Link href={"#"}>demo</Link>
      <Link href={"#"}>code</Link>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  background-color: darkgray;
  max-width: 300px;
  width: 100%;
`
const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`
const Link = styled.a`
`
const Title = styled.h3`
`



