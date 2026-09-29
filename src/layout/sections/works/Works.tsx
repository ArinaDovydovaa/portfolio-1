import styled from 'styled-components'
import {SectionTitle} from '@/components/SectionTitle'
import {Work} from './work/Work'
import {Container} from "@/components/Container";
import {theme} from "@/styles/Theme.ts";

import socialImg from '../../../assets/images/social-network.webp'
import storeImg from '../../../assets/images/online-store.webp'
import blogImg from '../../../assets/images/blog.webp'
import weatherImg from '../../../assets/images/weather.webp'
import notesImg from '../../../assets/images/notes.webp'
import timerImg from '../../../assets/images/timer.webp'


export const Works = () => {
  return (
    <StyledWorks id="works">
      <Container>
        <SectionTitle align="left">Проекты</SectionTitle>

        <WorksGrid>
          <Work
            title={"Социальная сеть"}
            src={socialImg}
            text={"React-приложение с профилем, диалогами и переиспользуемыми компонентами."}
            tags={["React", "TypeScript", "Styled Components"]}
          />
          <Work
            title={"Онлайн магазин"}
            src={storeImg}
            text={"Интернет-магазин с каталогом товаров, корзиной и оформлением заказа."}
            tags={["React", "TypeScript", "API"]}
          />
          <Work
            title={"Личный блог"}
            src={blogImg}
            text={"Блог с публикацией статей, категориями и системой комментариев."}
            tags={["React", "Routing", "UI"]}
          />
          <Work
            title={"Погодное приложение"}
            src={weatherImg}
            text={"Приложение с поиском городов и прогнозом погоды через открытый API."}
            tags={["JavaScript", "API", "Fetch"]}
          />
          <Work
            title={"Заметки"}
            src={notesImg}
            text={"Приложение для создания, редактирования и хранения заметок с поиском."}
            tags={["React", "State", "LocalStorage"]}
          />
          <Work
            title={"Таймер"}
            src={timerImg}
            text={"Интерактивный таймер с настройкой времени и отображением обратного отсчёта."}
            tags={["JavaScript", "Timer", "UI"]}
          />
        </WorksGrid>
      </Container>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
  background-color: ${theme.colors.primaryBg};
  padding: 150px 0;

`

const WorksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px;
`

