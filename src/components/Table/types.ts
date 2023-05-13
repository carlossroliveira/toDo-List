export interface ITableProps {
  list: {
    id: string
    content: string
    completed: boolean
  }[]
  handleDelete: (id: string) => void
  handleComplete: (id: string) => void
}
