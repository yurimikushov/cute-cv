import { FC } from 'react'
import cn from 'classnames'
import Portal from 'components/Portal'
import ModalPropsT from './Modal.props'

const Modal: FC<ModalPropsT> = ({ className, children, ...props }) => (
  <Portal
    className={cn(
      'fixed top-0 right-0 bottom-0 left-0',
      'flex justify-center items-center',
      'bg-overlay'
    )}
  >
    <div className={cn(className, 'bg-white shadow-xs')} {...props}>
      {children}
    </div>
  </Portal>
)

export default Modal
