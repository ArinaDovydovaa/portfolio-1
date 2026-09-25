import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 0 40px;
  margin: 0 auto;


  @media screen and (max-width: 768px) {
    padding: 0 24px;
  }

  @media screen and (max-width: 480px) {
    padding: 0 16px;
  }
`