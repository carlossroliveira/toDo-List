// Imagens
import clipboard from '../../assets/Clipboard.svg'

// Styles
import { FigureSC, ImgSC, ParagraphOneSC, ParagraphTwoSC } from './figureStyles'

export const Figure = () => {
  return (
    <FigureSC>
      <ImgSC src={clipboard} alt="imagem de um livro" />

      <figcaption>
        <ParagraphOneSC>Você ainda não tem tarefas cadastradas</ParagraphOneSC>

        <ParagraphTwoSC>
          Crie tarefas e organize seus itens a fazer
        </ParagraphTwoSC>
      </figcaption>
    </FigureSC>
  )
}
