// Packages
import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'

// Styles
import { ButtonSC, ContainerSC, FormSC, InputSC } from './inputStyles'

interface IInputProps {
  handleList: (value: string) => void
}

export const Input = (props: IInputProps) => {
  const { handleList } = props

  const [inputValues, setInputValues] = useState<string>('')

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValues(event.target.value)
  }

  const handleOnSubmit = (event: FormEvent) => {
    event.preventDefault()

    handleList(inputValues)

    setInputValues('')
  }

  return (
    <ContainerSC>
      <FormSC onSubmit={handleOnSubmit}>
        <InputSC
          type="text"
          value={inputValues}
          onChange={handleOnChange}
          placeholder="Adicione uma nova tarefa"
        />

        <ButtonSC type="submit">
          Criar <PlusCircle size={16} />
        </ButtonSC>
      </FormSC>
    </ContainerSC>
  )
}
