import styled from 'styled-components'

export const ContainerSC = styled.div`
  grid-area: header;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: -1.875rem;

  background-color: ${({ theme }) => theme.GRAY_SCALE[700]};

  img {
    margin-bottom: 1.875rem;
  }
`

export const ButtonSC = styled.button`
  display: flex;

  border: none;
  margin-bottom: 1.875rem;
  margin-left: 0.625rem;

  cursor: pointer;
  background-color: transparent;
  color: ${({ theme }) => theme.BLUE_SCALE.blue};
`
