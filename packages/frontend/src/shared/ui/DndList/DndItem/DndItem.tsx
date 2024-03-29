import { FC } from 'react'
import styled from 'styled-components'
import { Draggable } from '@hello-pangea/dnd'
import focusMixin from 'shared/styles/mixins/focus'
import DndItemProps from './DndItem.props'

const STUB_STRING = ''
const STUB_NUMBER = 0

const Item = styled.li`
  ${focusMixin}
`

const DndItem: FC<DndItemProps> = ({
  className,
  draggableId,
  index,
  isDragDisabled,
  children,
}) => {
  return (
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
