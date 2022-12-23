import { Children, cloneElement } from 'react'
import styled from 'styled-components'
import { DragDropContext, Droppable, DropResult } from '@hello-pangea/dnd'
import colors from 'shared/styles/colors'
import radiuses from 'shared/styles/radiuses'
import DndListProps from './DndList.props'

const List = styled('ul')<{ isDragging: boolean }>`
  padding: 0;
  list-style: none;

  ${({ isDragging }) =>
    isDragging &&
    `
      margin-left: -0.3rem;
      margin-right: -0.3rem;
      border: 3px dashed ${colors.gray50};
      border-radius: ${radiuses.md};
    `}
`

const DndList = ({
  className,
  isDndDisabled = false,
  children,
  onDragEnd,
}: DndListProps): JSX.Element => {
  const isDragDisabled = isDndDisabled || children.length < 2

  const handleDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) {
      return
    }

    const startIndex = source.index
    const endIndex = destination.index

    if (startIndex === endIndex) {
      return
    }

    onDragEnd(startIndex, endIndex)
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId='dnd-list'>
        {(provided, snapshot) => (
          <List
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={className}
            isDragging={snapshot.isDraggingOver}
          >
            {Children.map(children, (child, i) =>
              cloneElement(child, {
                draggableId: String(child.key ?? i),
                index: i,
                isDragDisabled,
              })
            )}
            {provided.placeholder}
          </List>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default DndList
