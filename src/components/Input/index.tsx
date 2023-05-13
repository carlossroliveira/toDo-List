// Packages
import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useRef, useState } from 'react'

// Types
import { IInputProps } from './types'

// Styles
import { ButtonSC, ContainerSC, FormSC, InputSC } from './inputStyles'

export const Input = (props: IInputProps) => {
  const { handleList } = props

  const [inputValues, setInputValues] = useState<string>('')

  const inputRef = useRef<HTMLInputElement>(null)

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValues(event.target.value)
  }

  const handleOnSubmit = (event: FormEvent) => {
    event.preventDefault()

    if (inputValues.trim() !== '') {
      handleList(inputValues)
    }

    if (inputRef.current) {
      inputRef.current.focus()
    }

    setInputValues('')
  }

  return (
    <ContainerSC>
      <FormSC onSubmit={handleOnSubmit}>
        <InputSC
          type="text"
          ref={inputRef}
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
