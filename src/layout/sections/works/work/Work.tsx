import styled from 'styled-components'
import {ButtonAccent} from "@/components/ButtonAccent";
import {theme} from "@/styles/Theme";


type WorkPropsType = {
  title: string
  text: string
  src: string
  tags: string[];
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
        <TagsList>
          {props.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagsList>
        <Link href={"#"}>GitHub → </Link>
      </Description>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  width: 100%;
  background: ${theme.colors.primaryBg};
  border: 1px solid rgba(37, 37, 37, 0.08);
  border-radius: 18px;
  overflow: hidden;
  box-shadow: ${theme.colors.shadowMd};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 26px 70px rgba(37, 37, 37, 0.11);
  }
`

const ImageWrapper = styled.div`
  aspect-ratio: 12 / 10;
  position: relative;
  overflow: hidden;

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
  height: 100%;
  object-fit: cover;
  display: block;
`
const Description = styled.div`
  padding: 22px;
`
const Title = styled.h3`
  margin: 0 0 10px;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.25;
  text-align: left;
`
const Text = styled.p`
  line-height: 1.55;
`
const TagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 18px 0 20px;
`

const Tag = styled.li`
  padding: 6px 10px;
  border-radius: 999px;
  background-color: ${theme.colors.secondaryBg};
  color: ${theme.colors.textMuted};
  font-size: 12px;
  font-weight: 600;
  line-height: 1;
`

const Link = styled.a`
  display: inline-flex;
  align-items: center;
  color: ${theme.colors.textPrimary};
  font-size: 14px;
  font-weight: 700;
  transition: color 0.3s ease;

  &:hover {
    color: ${theme.colors.accentColor};
  }
`








