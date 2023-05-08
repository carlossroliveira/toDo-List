// Packages
import { PlusCircle } from 'phosphor-react'

// Styles
import { ButtonSC, ContainerSC, FormSC, InputSC } from './inputStyles'

export const Input = () => {
  return (
    <ContainerSC>
      <FormSC>
        <InputSC type="text" placeholder="Adicione uma nova tarefa" />

        <ButtonSC>
          Criar <PlusCircle size={16} />
        </ButtonSC>
      </FormSC>
    </ContainerSC>
  )
}
