import styled from 'styled-components'

export const ContainerSC = styled.section`
  margin: 0 auto;
  padding: 0 2rem;
  max-width: 70rem;

  grid-area: main;
`

export const FormSC = styled.form`
  gap: 0.5rem;

  display: flex;
  justify-content: center;
`

export const ButtonSC = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 5.625rem;
  height: 3.25rem;

  gap: 0.5rem;
  border-radius: 8px;
  border: 1px solid transparent;

  color: ${({ theme }) => theme.GRAY_SCALE[100]};
  background-color: ${({ theme }) => theme.BLUE_SCALE.blueDark};

  &:focus {
    border: 1px solid ${({ theme }) => theme.PURPLE_SCALE.purpleDark};
  }

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.BLUE_SCALE.blue};
  }
`
