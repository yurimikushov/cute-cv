import { FC } from 'react'
import styled from 'styled-components'
import noop from 'lodash/noop'
import useInertSiblings from 'hooks/useInertSiblings'
import Portal from 'components/Portal'
import colors from 'styles/colors'
import shadows from 'styles/shadows'
import zIndex from 'styles/zIndex'
import useCloseModal from './hooks/useCloseModal'
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
  const { elementRef: portalRef } = useInertSiblings<HTMLDivElement>()
  const { contentRef } = useCloseModal<HTMLDivElement>(onClose)

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
