import { ForwardRefRenderFunction, forwardRef } from 'react'
import styled from 'styled-components'
import Portal from 'components/Portal'
import zIndex from 'styles/zIndex'
import ContentPortalProps from './ContentPortal.props'

const Content = styled.div<ContentPortalProps>`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  z-index: ${zIndex.popup};
`

const ContentPortal: ForwardRefRenderFunction<
  HTMLDivElement,
  ContentPortalProps
> = ({ children, ...props }, innerRef) => {
  return (
    <Portal>
      <Content {...props} ref={innerRef}>
        {children}
      </Content>
    </Portal>
  )
}

export default forwardRef(ContentPortal)
