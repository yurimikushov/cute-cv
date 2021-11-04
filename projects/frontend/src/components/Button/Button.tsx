import { FC } from 'react'
import cn from 'classnames'
import ButtonPropsT from './Button.props'

const Button: FC<ButtonPropsT> = ({ className, children, ...props }) => (
  <button
    {...props}
    className={cn(
      className,
      'px-2 text-gray-300 hover:text-black leading-5 cursor-pointer'
    )}
    type='button'
  >
    {children}
  </button>
)

export default Button
