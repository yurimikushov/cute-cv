import { FC, cloneElement } from 'react'
import styled from 'styled-components'
import useInertSiblings from 'shared/hooks/useInertSiblings'
import zIndex from 'shared/styles/zIndex'
import Portal from 'shared/ui/Portal'
import useDropdown from './hooks/useDropdown'
import DropdownProps from './Dropdown.props'

const Content = styled.div`
  position: absolute;
  z-index: ${zIndex.popup};
`

const Dropdown: FC<DropdownProps> = ({
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
          <Content {...contentProps}>{content}</Content>
        </Portal>
      )}
    </>
  )
}

export default Dropdown
