import styled from 'styled-components';
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {Container} from "@/components/Container.tsx";
import {FlexWrapper} from "@/components/FlexWrapper.tsx";

const menuItems = ["About", "Projects", "Contacts"];

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper
          justify={"space-between"}
          align={"center"}
        >
          <Logo />
          <Menu menuItems={menuItems} />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`

  background-color: #323232;
`

