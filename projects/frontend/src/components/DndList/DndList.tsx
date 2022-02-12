import { Children, cloneElement } from 'react'
import styled from 'styled-components'
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd'
import size from 'lodash/size'
import colors from 'styles/colors'
import radiuses from 'styles/radiuses'
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
  children,
  onDragEnd,
}: DndListProps): JSX.Element => {
  // eslint-disable-next-line no-magic-numbers
  const isDragDisabled = size(children) < 2

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
            {/* eslint-disable-next-line lodash/prefer-lodash-method */}
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
