import styled from 'styled-components';

type SocialItemType = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  href: string
  label: string
}

type SocialListPropsType = {
  items: SocialItemType[]
}

export const SocialList = (props: SocialListPropsType) => {
  return (
    <StyledSocialList>
      {props.items.map((item) => {
        const Icon = item.icon;

        return (
          <SocialItem key={item.label}>
            <SocialLink
              href={item.href}
              aria-label={item.label}
            >
              <Icon
                width={50}
                height={50}
              />
            </SocialLink>
          </SocialItem>
        )
      })}
    </StyledSocialList>
  );
};

const StyledSocialList = styled.ul`
  display: flex;
  gap: 70px;
  list-style: none;
  margin: 0;
  padding: 0;
`
const SocialItem = styled.li`
`
const SocialLink = styled.a`
  display: flex;
`