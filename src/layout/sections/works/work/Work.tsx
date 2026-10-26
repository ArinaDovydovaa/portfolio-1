import styled from 'styled-components';
import {theme} from '@/styles/Theme';

type WorkPropsType = {
  title: string;
  text: string;
  src: string;
  tags: string[];
  projectHref?: string;
  codeHref?: string;
};

export const Work = (props: WorkPropsType) => {
  return (
    <StyledWork>
      {/* Заменить #works реальными адресами, когда проекты будут опубликованы. */}
      <ImageLink href={props.projectHref || '#works'} aria-label={`Открыть проект «${props.title}»`}>
        <Image src={props.src} alt={props.title} loading="lazy" />
      </ImageLink>
      <Description>
        <Title><a href={props.projectHref || '#works'}>{props.title}</a></Title>
        <Text>{props.text}</Text>
        <TagsList>
          {props.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
        </TagsList>
        <WorkLinks>
          <a href={props.projectHref || '#works'}>Смотреть проект ↗</a>
          <a href={props.codeHref || '#works'} aria-label={`Код проекта «${props.title}» на GitHub`}>GitHub →</a>
        </WorkLinks>
      </Description>
    </StyledWork>
  );
};

const StyledWork = styled.article`
  overflow: hidden;
  border: 1px solid ${theme.colors.border};
  border-radius: 14px;
  background: ${theme.colors.secondaryBg};
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover { transform: translateY(-4px); box-shadow: ${theme.colors.shadowMd}; }
`;
const Image = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: contain;
  transition: transform 0.35s;
`;
const Description = styled.div`padding: 24px;`;
const Title = styled.h3`
  margin-bottom: 12px;
  font-size: 24px;
  font-weight: 600;
  a { transition: color 0.25s; }
  a:hover { color: ${theme.colors.accentHover}; }
`;
const Text = styled.p`font-size: 15px;`;
const TagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 22px;
`;
const Tag = styled.li`
  padding: 5px 10px;
  background: ${theme.colors.primaryBg};
  border: 1px solid ${theme.colors.border};
  border-radius: 4px;
  color: ${theme.colors.textPrimary};
  font-size: 12px;
`;

const ImageLink = styled.a`
  display: block;
  overflow: hidden;
  &:hover img, &:focus-visible img { transform: scale(1.025); }
`;
const WorkLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: ${theme.spacing.md};
  margin-top: 24px;
  padding-top: 18px;
  border-top: 1px solid ${theme.colors.border};
  font-size: 14px;
  a { transition: color 0.25s; }
  a:hover { color: ${theme.colors.accentHover}; }
`;
