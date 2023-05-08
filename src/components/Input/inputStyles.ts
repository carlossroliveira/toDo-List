import styled from 'styled-components'

export const ContainerSC = styled.div`
  margin-bottom: 4rem;
`

export const FormSC = styled.form`
  gap: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const InputSC = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32.6875rem;
  height: 3.375rem;

  gap: 0.5rem;
  border-radius: 8px;
  border: 1px solid transparent;

  text-indent: 1rem;

  color: ${({ theme }) => theme.GRAY_SCALE[300]};
  background-color: ${({ theme }) => theme.GRAY_SCALE[500]};

  &:focus-within {
    &::placeholder {
      color: ${({ theme }) => theme.GRAY_SCALE[100]};
    }

    color: ${({ theme }) => theme.GRAY_SCALE[100]};
    border: 1px solid ${({ theme }) => theme.PURPLE_SCALE.purpleDark};
  }
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

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.BLUE_SCALE.blue};
  }
`
