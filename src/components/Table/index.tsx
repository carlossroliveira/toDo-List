// Imagens
import clipboard from '../../assets/Clipboard.svg'

// Styles
import {
  DivSC,
  FigureSC,
  ImgSC,
  ParagraphOneDivSC,
  ParagraphOneSC,
  ParagraphTwoDivSC,
  ParagraphTwoSC,
  SpanSC,
} from './tableStyles'

export const Table = () => {
  return (
    <>
      <DivSC>
        <ParagraphOneDivSC>
          Tarefas criadas
          <SpanSC>0</SpanSC>
        </ParagraphOneDivSC>

        <ParagraphTwoDivSC>
          Concluídas <SpanSC>0</SpanSC>
        </ParagraphTwoDivSC>
      </DivSC>

      <FigureSC>
        <ImgSC src={clipboard} alt="imagem de um livro" />

        <figcaption>
          <ParagraphOneSC>
            Você ainda não tem tarefas cadastradas
          </ParagraphOneSC>

          <ParagraphTwoSC>
            Crie tarefas e organize seus itens a fazer
          </ParagraphTwoSC>
        </figcaption>
      </FigureSC>
    </>
  )
}
