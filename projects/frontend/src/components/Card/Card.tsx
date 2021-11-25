import { FC } from 'react'
import cn from 'classnames'
import noop from 'lodash/noop'
import { CloseButton } from 'components/Button'
import CardPropsT from './Card.props'
import './Card.css'

const Card: FC<CardPropsT> = ({
  className,
  withBorder = true,
  hasClose = false,
  onClose = noop,
  children,
  ...props
}) => (
  <div
    className={cn(className, 'card', { 'card--with-border': withBorder })}
    {...props}
  >
    {children}
    {hasClose && <CloseButton className='card__close' onClick={onClose} />}
  </div>
)

export default Card
