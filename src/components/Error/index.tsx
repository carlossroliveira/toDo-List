// Packages
import { useNavigate } from 'react-router-dom'

// Styles
import {
  ButtonSC,
  ContainerSC,
  DivTwoSC,
  ParagraphSC,
  TitleSC,
} from './errorStyles'

export const Error = () => {
  const navigate = useNavigate()

  return (
    <ContainerSC>
      <DivTwoSC>
        <TitleSC>Está página não existe!</TitleSC>

        <ParagraphSC>Clique no botão voltar</ParagraphSC>

        <ButtonSC onClick={() => navigate('/')}>voltar</ButtonSC>
      </DivTwoSC>
    </ContainerSC>
  )
}
