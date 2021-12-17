import { FC, useRef } from 'react'
import styled from 'styled-components'
import useInertSiblings from 'hooks/useInertSiblings'
import Portal from 'components/Portal'
import colors from 'styles/colors'
import shadows from 'styles/shadows'
import ModalPropsT from './Modal.props'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.overlay};
`

const Content = styled.div`
  background-color: ${colors.white};
  box-shadow: ${shadows.xs};
`

const Modal: FC<ModalPropsT> = ({ children, ...props }) => {
  const portalRef = useRef<HTMLDivElement>(null)

  useInertSiblings(portalRef)

  return (
    <Portal ref={portalRef}>
      <Overlay>
        <Content {...props}>{children}</Content>
      </Overlay>
    </Portal>
  )
}

export default Modal
