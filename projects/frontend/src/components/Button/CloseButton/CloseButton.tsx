import { FC } from 'react'
import cn from 'classnames'
import { ReactComponent as CloseIcon } from 'icons/close.svg'
import CloseButtonPropsT from './CloseButton.props'

const CloseButton: FC<CloseButtonPropsT> = ({
  className,
  onClick,
  ...props
}) => (
  <button
    {...props}
    className={cn(
      className,
      'w-3.5 h-3.5',
      'text-gray-200 hover:text-gray-300 cursor-pointer'
    )}
    type='button'
    onClick={onClick}
  >
    <CloseIcon />
  </button>
)

export default CloseButton
