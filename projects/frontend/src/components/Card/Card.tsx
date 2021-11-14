import { FC } from 'react'
import cn from 'classnames'
import noop from 'lodash/noop'
import { CloseButton } from 'components/Button'
import CardPropsT from './Card.props'

const Card: FC<CardPropsT> = ({
  className,
  withBorder = true,
  hasClose = false,
  onClose = noop,
  children,
  ...props
}) => (
  <div
    className={cn(
      className,
      'relative',
      'bg-white rounded-md',
      `${withBorder ? 'p-2' : ''}`,
      `${withBorder ? 'border border-solid border-gray-200' : ''}`,
      `${withBorder ? 'hover:shadow-sm' : ''}`
    )}
    {...props}
  >
    {children}
    {hasClose && (
      <CloseButton className='absolute top-2 right-1.5' onClick={onClose} />
    )}
  </div>
)

export default Card
