import { FC } from 'react'
import styled from 'styled-components'
import Portal from 'components/Portal'
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
  background-color: #e5e5e5e6;
`

const Content = styled.div`
  background-color: #fff;
  box-shadow: 0 0 2px 0 #e5e5e5;
`

const Modal: FC<ModalPropsT> = ({ children, ...props }) => (
  <PortalWrapper>
    <Content {...props}>{children}</Content>
  </PortalWrapper>
)

export default Modal
