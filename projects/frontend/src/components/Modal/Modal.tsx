import { FC } from 'react'
import styled from 'styled-components'
import Portal from 'components/Portal'
import colors from 'styles/colors'
import shadows from 'styles/shadows'
import ModalPropsT from './Modal.props'

const PortalWrapper = styled(Portal)`
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

const Modal: FC<ModalPropsT> = ({ children, ...props }) => (
  <PortalWrapper>
    <Content {...props}>{children}</Content>
  </PortalWrapper>
)

export default Modal
