import { FC } from 'react'
import cn from 'classnames'
import { ReactComponent as CloseIcon } from 'icons/close.svg'
import CardPropsT from './Card.props'

const Card: FC<CardPropsT> = ({
  className,
  hasClose = false,
  onClose,
  children,
}) => (
  <div
    className={cn(
      className,
      'relative',
      'bg-white rounded-md',
      'border border-solid border-gray-200',
      'hover:shadow-sm'
    )}
  >
    {children}
    {hasClose && (
      <button
        className={cn(
          'absolute top-2 right-2',
          'w-4 h-4',
          'text-gray-200 hover:text-gray-300 cursor-pointer'
        )}
        type='button'
        onClick={onClose}
      >
        <CloseIcon />
      </button>
    )}
  </div>
)

export default Card
