// Packages
import { v4 as uuidv4 } from 'uuid'
import { Trash } from 'phosphor-react'
import { useCallback, useMemo } from 'react'

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
    content: string
    completed: boolean
  }[]
  handleDelete: (id: string) => void
  handleComplete: (id: string) => void
}

export const Table = (props: ITableProps) => {
  const { list, handleDelete, handleComplete } = props

  const amountOfTasks = list.length

  const amountOfCompletedTasks = list.filter(
    (element) => element.completed === true,
  ).length

  const handleOnChange = useCallback(
    (id: string) => {
      handleComplete(id)
    },
    [handleComplete],
  )

  const componentTable = useMemo(
    () =>
      list?.map((element) => (
        <div key={uuidv4()}>
          <DivTableSC>
            <CheckboxInput>
              <label>
                <input
                  type="checkbox"
                  checked={element.completed}
                  onChange={() => handleOnChange(element.id)}
                />
                <span></span>
              </label>
            </CheckboxInput>

            <TableParagraphSC isTrue={element.completed}>
              {element.content}
            </TableParagraphSC>

            <TableButton type="button" onClick={() => handleDelete(element.id)}>
              <Trash size={20} />
            </TableButton>
          </DivTableSC>
        </div>
      )),
    [handleDelete, handleOnChange, list],
  )

  return (
    <>
      <DivSC>
        <ParagraphOneDivSC>
          Tarefas criadas
          <SpanSC>{amountOfTasks}</SpanSC>
        </ParagraphOneDivSC>

        <ParagraphTwoDivSC>
          Concluídas{' '}
          <SpanSC>{`${amountOfCompletedTasks} de ${amountOfTasks}`}</SpanSC>
        </ParagraphTwoDivSC>
      </DivSC>

      <ContainerTableSC>
        {list && list.length > 0 ? componentTable : <Figure />}
      </ContainerTableSC>
    </>
  )
}
