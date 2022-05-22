import { FC, cloneElement } from 'react'
import usePopup from './hooks/usePopup'
import PopupProps from './Popup.props'
import ContentPortal from './ContentPortal'

const Popup: FC<PopupProps> = ({
  trigger = 'click',
  placement = 'bottom',
  content,
  children,
}) => {
  const { isVisible, triggerProps, contentProps } = usePopup(trigger, placement)

  return (
    <>
      {cloneElement(children, triggerProps)}
      {isVisible && <ContentPortal {...contentProps}>{content}</ContentPortal>}
    </>
  )
}

export default Popup
