import { FC, cloneElement } from 'react'
import styled from 'styled-components'
import useInertSiblings from 'shared/hooks/useInertSiblings'
import zIndex from 'shared/styles/zIndex'
import Portal from 'shared/ui/Portal'
import useDropdown from './hooks/useDropdown'
import DropdownProps from './Dropdown.props'

const Content = styled.div<{
  fixed: boolean
  top: number
  left: number
}>`
  position: ${({ fixed }) => (fixed ? 'fixed' : 'absolute')};
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  z-index: ${zIndex.popup};
`

const Dropdown: FC<DropdownProps> = ({
  fixed = false,
  trigger = 'click',
  placement = 'bottom',
  content,
  children,
}) => {
  const { isVisible, triggerProps, contentProps } = useDropdown(
    trigger,
    placement
  )

  const { elementRef } = useInertSiblings<HTMLDivElement>(isVisible)

  return (
    <>
      {cloneElement(children, triggerProps)}
      {isVisible && (
        <Portal ref={elementRef}>
          <Content fixed={fixed} {...contentProps}>
            {content}
          </Content>
        </Portal>
      )}
    </>
  )
}

export default Dropdown
