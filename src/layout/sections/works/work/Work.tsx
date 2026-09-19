import styled from 'styled-components'
import {Button} from "@/components/Button.tsx";
import {theme} from "@/styles/Theme.ts";


type WorkPropsType = {
  title: string
  text: string
  src: string
}

export const Work = (props: WorkPropsType) => {
  return (
    <StyledWork>
      <ImageWrapper>
        <Image
          src={props.src}
          alt=""
        />
        <Button>view project</Button>
      </ImageWrapper>

      <Description>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
        <Link href={"#"}>demo</Link>
        <Link href={"#"}>code</Link>
      </Description>
    </StyledWork>
  );
};

const Link = styled.a`
    // color: ${theme.colors.small};
`
const StyledWork = styled.div`
  background: ${theme.colors.primaryBg};
  max-width: 30%;
  width: 100%;

  ${Link} {
    padding: 10px 0;

    & + ${Link} {
      margin-left: 10px;
    }
  }
`

const ImageWrapper = styled.div`
  position: relative;

  &:hover {

    &::before {
      content: " ";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(4px);
    }

    ${Button} {
      opacity: 1;
    }
  }

  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`

const Description = styled.div`
  padding: 25px 20px;
  //display: flex;
  //flex-direction: column;
  //justify-content: center;
  //align-items: center;
`

const Title = styled.h3`

`
const Text = styled.p`
  margin: 10px 0 8px;`







