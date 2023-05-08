import styled from 'styled-components'

export const ContainerSC = styled.section`
  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: 200px calc(100vh - 200px);
  grid-template-areas:
    'header'
    'main';

  background-color: ${({ theme }) => theme.GRAY_SCALE[600]};

  @media (max-width: 768px) {
    font-size: 87.5%;
    grid-template-columns: 1fr;
  }
`
