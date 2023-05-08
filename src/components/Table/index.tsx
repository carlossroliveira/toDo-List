// Packages
import { Trash } from 'phosphor-react'

// Imagens
import clipboard from '../../assets/Clipboard.svg'

import { Checkbox } from 'pretty-checkbox-react'

// Styles
import {
  CheckboxContainer,
  CheckboxInput,
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
  TableCheckboxSC,
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

      {/*  <FigureSC>
        <ImgSC src={clipboard} alt="imagem de um livro" />

        <figcaption>
          <ParagraphOneSC>
            Você ainda não tem tarefas cadastradas
          </ParagraphOneSC>

          <ParagraphTwoSC>
            Crie tarefas e organize seus itens a fazer
          </ParagraphTwoSC>
        </figcaption>
      </FigureSC> */}

      <DivTableSC>
        <CheckboxInput>
          <label>
            <input type="checkbox" />
            <span></span>
          </label>
        </CheckboxInput>

        <TableParagraphSC>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
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
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </TableParagraphSC>

        <TableButton>
          <Trash size={20} />
        </TableButton>
      </DivTableSC>
    </>
  )
}
