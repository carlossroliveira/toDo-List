// Packages
import { Trash } from 'phosphor-react'

// Imagens
import clipboard from '../../assets/Clipboard.svg'

// Styles
import {
  CheckboxInput,
  ContainerTableSC,
  DivSC,
  DivTableSC,
  FigureSC,
  ImgSC,
  ParagraphOneDivSC,
  ParagraphOneSC,
  ParagraphTwoDivSC,
  ParagraphTwoSC,
  SpanSC,
  TableButton,
  TableParagraphSC,
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

      <ContainerTableSC>
        <DivTableSC>
          <CheckboxInput>
            <label>
              <input type="checkbox" />
              <span></span>
            </label>
          </CheckboxInput>

          <TableParagraphSC isCheck>
            Integer urna interdum massa libero auctor neque turpis turpis
            semper. Duis vel sed fames integer.
          </TableParagraphSC>

          <TableButton>
            <Trash size={20} />
          </TableButton>
        </DivTableSC>

        <DivTableSC>
          <CheckboxInput>
            <label>
              <input type="checkbox" />
              <span></span>
            </label>
          </CheckboxInput>

          <TableParagraphSC>
            Integer urna interdum massa libero auctor neque turpis turpis
            semper. Duis vel sed fames integer.
          </TableParagraphSC>

          <TableButton>
            <Trash size={20} />
          </TableButton>
        </DivTableSC>
      </ContainerTableSC>
    </>
  )
}
