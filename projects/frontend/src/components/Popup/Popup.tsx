import { FC, cloneElement } from 'react'
import styled from 'styled-components'
import Portal from 'components/Portal'
import usePopup from './hooks/usePopup'
import PopupProps from './Popup.props'

type ContentProps = {
  top: number
  left: number
}

const Content = styled.div<ContentProps>`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  z-index: 20;
`

const Popup: FC<PopupProps> = ({
  trigger = 'click',
  placement = 'bottom',
  content,
  children,
}) => {
  const { isVisible, triggerProps, contentProps } = usePopup(trigger, placement)

  return (
    <>
      {cloneElement(children, triggerProps)}
      {isVisible && (
        <Portal>
          <Content {...contentProps}>{content}</Content>
        </Portal>
      )}
    </>
  )
}

export default Popup
