// Packages
import { useMemo } from 'react'
import { v4 as uuidv4 } from 'uuid'
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

interface ITableProps {
  list: {
    id: string
    isChecked: boolean
    content: string
  }[]
  checked: boolean
  handleChange: any
}

export const Table = (props: ITableProps) => {
  const { list, checked, handleChange } = props

  console.log(list)

  const componentTable = useMemo(
    () =>
      list?.map((element) => (
        <div key={uuidv4()}>
          <DivTableSC>
            <CheckboxInput>
              <label>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={handleChange}
                />
                <span></span>
              </label>
            </CheckboxInput>

            <TableParagraphSC isTrue={checked}>
              {element.content}
            </TableParagraphSC>

            <TableButton>
              <Trash size={20} />
            </TableButton>
          </DivTableSC>
        </div>
      )),
    [checked, handleChange, list],
  )

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

      <ContainerTableSC>
        {list && list.length > 0 ? componentTable : <Figure />}
      </ContainerTableSC>
    </>
  )
}
