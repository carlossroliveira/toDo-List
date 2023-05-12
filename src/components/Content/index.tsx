// Packages
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

// Components
import { Input } from '../Input'
import { Table } from '../Table'

// Styles
import { ContainerSC } from './contentStyles'

interface IContentProps {
  id: string
  content: string
  completed: boolean
}

export const Content = () => {
  const [list, setList] = useState<IContentProps[]>([])

  const handleList = (value: string) => {
    setList([...list, { id: uuidv4(), content: value, completed: false }])
  }

  const handleDelete = (id: string) => {
    const valueId = list.filter((element) => element.id !== id)

    setList(valueId)
  }

  const handleComplete = (id: string) => {
    const updatedList = list.map((element) =>
      element.id === id
        ? { ...element, completed: !element.completed }
        : element,
    )

    setList(updatedList)
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
