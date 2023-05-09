// Packages
import { Trash } from 'phosphor-react'

// Components
import { Figure } from '../Figure'

// Styles
import {
  CheckboxInput,
  ContainerTableSC,
  DivSC,
  DivTableSC,
  ParagraphOneDivSC,
  ParagraphTwoDivSC,
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

      <Figure />

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
      </ContainerTableSC>
    </>
  )
}
