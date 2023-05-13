// Packages
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

// Components
import { Table } from '../Table'
import { Input } from '../Input'

// Types
import { IContentProps } from './types'

// Styles
import { ContainerSC } from './contentStyles'

export const Content = () => {
  const [list, setList] = useState<IContentProps[]>([])

  const handleList = (value: string) => {
    const newItem = { id: uuidv4(), content: value, completed: false }

    setList((prevList) => [...prevList, newItem])
  }

  const handleDelete = (id: string) => {
    const valueId = (prevList: IContentProps[]) =>
      prevList.filter((element) => element.id !== id)

    setList(valueId)
  }

  const handleComplete = (id: string) => {
    const isComplete = (prevList: IContentProps[]) => {
      return prevList.map((element) =>
        element.id === id
          ? { ...element, completed: !element.completed }
          : element,
      )
    }

    setList(isComplete)
  }

  return (
    <ContainerSC>
      <Input handleList={handleList} />

      <Table
        list={list}
        handleDelete={handleDelete}
        handleComplete={handleComplete}
      />
    </ContainerSC>
  )
}
