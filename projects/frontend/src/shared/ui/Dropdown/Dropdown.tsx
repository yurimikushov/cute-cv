import { FC, cloneElement } from 'react'
import useDropdown from './hooks/useDropdown'
import DropdownProps from './Dropdown.props'
import ContentPortal from './ContentPortal'

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

  return (
    <>
      {cloneElement(children, triggerProps)}
      {isVisible && <ContentPortal {...contentProps}>{content}</ContentPortal>}
    </>
  )
}

export default Dropdown
