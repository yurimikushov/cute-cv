import { FC } from 'react'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'
import shadows from 'styles/shadows'
import DndItemProps from './DndItem.props'

const STUB_STRING = ''
const STUB_NUMBER = 0

const Item = styled.li`
  &:focus-visible {
    outline: none;
    box-shadow: ${shadows.sm};
  }
`

const DndItem: FC<DndItemProps> = ({
  className,
  draggableId,
  index,
  isDragDisabled,
  children,
}) => {
  return (
    // eslint-disable-next-line no-magic-numbers
    <Draggable
      draggableId={draggableId ?? STUB_STRING}
      index={index ?? STUB_NUMBER}
      isDragDisabled={isDragDisabled}
    >
      {(provided) => (
        <Item
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={className}
          style={provided.draggableProps.style}
        >
          {children}
        </Item>
      )}
    </Draggable>
  )
}

export default DndItem
