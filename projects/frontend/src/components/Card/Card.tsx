import { FC } from 'react'
import cn from 'classnames'
import { CloseButton } from 'components/Button'
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
      <CloseButton className='absolute top-2 right-1.5' onClick={onClose} />
    )}
  </div>
)

export default Card
