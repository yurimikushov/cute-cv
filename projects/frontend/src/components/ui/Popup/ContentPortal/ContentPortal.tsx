import { ForwardRefRenderFunction, forwardRef } from 'react'
import styled from 'styled-components'
import useInertSiblings from 'hooks/useInertSiblings'
import Portal from 'components/ui/Portal'
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
  const { elementRef } = useInertSiblings<HTMLDivElement>()

  return (
    <Portal ref={elementRef}>
      <Content {...props} ref={innerRef}>
        {children}
      </Content>
    </Portal>
  )
}

export default forwardRef(ContentPortal)
