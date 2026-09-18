import {useEffect, useState} from 'react';
import styled, {css} from 'styled-components';
import {Logo} from "../../components/logo/Logo";
import {Container} from "@/components/Container";
import {FlexWrapper} from "@/components/FlexWrapper.tsx";
import {HeaderMenu} from "@/layout/header/HeaderMenu.tsx";

const menuItems = ["About", "Projects", "Contacts"];

export const Header = () => {
  // Флаг: проскроллена ли страница достаточно, чтобы уплотнить хедер
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Обработчик скролла. если больше 50px —  "плотный" вид
    const onScroll = () => setIsScrolled(window.scrollY > 50);

    // Подписываемся на событие скролла при монтировании
    window.addEventListener('scroll', onScroll);
    // Отписываемся при размонтировании — иначе будет утечка памяти
    return () => window.removeEventListener('scroll', onScroll);
  }, []);// [] — эффект выполнится один раз при монтировании


  return (
    // Передаём пропс $isScrolled в styled-компонент.
    <StyledHeader $isScrolled={isScrolled}>
      <Container>
        <FlexWrapper
          justify={"space-between"}
          align={"center"}
        ><Logo />
          {/*Меню принимает массив пунктов через пропс*/}
          <HeaderMenu menuItems={menuItems} />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

// Тип пропса указываем в generic, чтобы TS знал про $isScrolled
const StyledHeader = styled.header<{ $isScrolled: boolean }>`
  padding: 15px 0;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9999;

  //Плавные переходы
  transition: background-color 0.3s ease,
  backdrop-filter 0.3s ease,
  box-shadow 0.3s ease;

  //  Условные стили:
  //  - если isScrolled=true  → полупрозрачный фон + blur (glassmorphism)
  //- если isScrolled=false → полностью прозрачный, виден фон Main
  ${({$isScrolled}) =>
    $isScrolled
      ? css`
        background-color: rgba(30, 30, 30, 0.6);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        //тень снизу
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      `

      /* Сверху страницы хедер полностью прозрачный —
                   виден фон hero-секции (Main) */
      : css`
        background-color: transparent;
      `}
`;

