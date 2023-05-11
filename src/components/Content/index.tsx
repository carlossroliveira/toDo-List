// Packages
import { v4 as uuidv4 } from 'uuid'
import { FormEvent, useState } from 'react'

// Components
import { Input } from '../Input'
import { Table } from '../Table'

// Styles
import { ButtonSC, ContainerSC, FormSC } from './contentStyles'
import { PlusCircle } from 'phosphor-react'

export const Content = () => {
  const [values, setValues] = useState<any>('')

  const [checked, setChecked] = useState(false)

  const [list, setList] = useState<any>([
    /* {
      id: uuidv4(),
      isChecked: checked,
      content: 'teste',
    }, */
  ])

  const handleOnSubmit = (event: FormEvent) => {
    event.preventDefault()

    setList([
      ...list,
      {
        id: uuidv4(),
        isChecked: checked,
        content: values,
      },
    ])

    setValues('')
  }

  const handleChange = () => {
    setChecked((prev) => !prev)
  }

  return (
    <ContainerSC>
      <FormSC onSubmit={handleOnSubmit}>
        <Input onValues={values} onSetValues={setValues} />

        <ButtonSC>
          Criar <PlusCircle size={16} />
        </ButtonSC>
      </FormSC>

      <Table list={list} checked={checked} handleChange={handleChange} />
    </ContainerSC>
  )
}
