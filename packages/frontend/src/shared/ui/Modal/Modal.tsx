import { FC, useRef } from 'react'
import styled from 'styled-components'
import noop from 'lodash/noop'
import useLockBody from 'shared/hooks/useLockBody'
import useInertSiblings from 'shared/hooks/useInertSiblings'
import useOutsideClick from 'shared/hooks/useOutsideClick'
import useKeyDown from 'shared/hooks/useKeyDown'
import Portal from 'shared/ui/Portal'
import colors from 'shared/styles/colors'
import shadows from 'shared/styles/shadows'
import zIndex from 'shared/styles/zIndex'
import ModalProps from './Modal.props'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${zIndex.modal};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.overlay};
`

const Content = styled.div`
  background-color: ${colors.white};
  box-shadow: ${shadows.xs};
`

const Modal: FC<ModalProps> = ({ children, onClose = noop, ...props }) => {
  const contentRef = useRef<HTMLDivElement>(null)

  useLockBody()

  const { elementRef: portalRef } = useInertSiblings<HTMLDivElement>()

  useOutsideClick(contentRef, onClose)
  useKeyDown('Escape', onClose)

  return (
    <Portal ref={portalRef}>
      <Overlay>
        <Content ref={contentRef} {...props}>
          {children}
        </Content>
      </Overlay>
    </Portal>
  )
}

export default Modal
