import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 32px;

  @media (max-width: 576px) {
    padding: 0 20px;
  }
`;
