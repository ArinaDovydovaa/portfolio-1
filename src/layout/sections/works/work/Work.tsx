import styled from 'styled-components'
import {ButtonAccent} from "@/components/ButtonAccent.tsx";
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
        <ButtonAccent>смотреть проект</ButtonAccent>
      </ImageWrapper>

      <Description>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
        {/*<Link href={"#"}>Демо</Link>*/}
        <Link href={"#"}>GitHub</Link>
      </Description>
    </StyledWork>
  );
};

const Link = styled.a`
  color: ${theme.colors.small};
  border: 1px solid #ebebeb;
  box-shadow: 0 2px 40px 0 rgba(187, 187, 187, 0.25);
  border-radius: 5px;
  padding: 5px;
`
const StyledWork = styled.div`
  background: ${theme.colors.primaryBg};
  flex: 1 1 300px;
  max-width: 380px;
  width: 100%;
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

    ${ButtonAccent} {
      opacity: 1;
    }
  }

  ${ButtonAccent} {
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
  padding: 20px;

`

const Title = styled.h3`

`
const Text = styled.p`
  padding: 10px 0;`







