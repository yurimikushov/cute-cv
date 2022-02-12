import { ReactElement } from 'react'
import { DndItemProps } from './DndItem'

type DndListProps = {
  className?: string
  children: Array<ReactElement<DndItemProps>>
  onDragEnd: (startIndex: number, endIndex: number) => void
}

export default DndListProps
