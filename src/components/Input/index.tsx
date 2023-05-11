// Packages
import { ChangeEvent, Dispatch, SetStateAction } from 'react'

// Styles
import { ContainerSC, InputSC } from './inputStyles'

interface IInputProps {
  onValues: string
  onSetValues: Dispatch<SetStateAction<string>>
}

export const Input = (props: IInputProps) => {
  const { onValues, onSetValues } = props

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSetValues(event.target.value)
  }

  return (
    <ContainerSC>
      <InputSC
        type="text"
        value={onValues}
        onChange={handleOnChange}
        placeholder="Adicione uma nova tarefa"
      />
    </ContainerSC>
  )
}
