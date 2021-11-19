import { FC, cloneElement } from 'react'
import cn from 'classnames'
import Button from 'components/Button'
import SignInButtonPropsT from './SignInButton.props'

const SignInButton: FC<SignInButtonPropsT> = ({
  className,
  icon,
  children,
  onClick,
}) => (
  <Button
    className={cn(
      className,
      'py-2 px-4',
      'flex items-center gap-3',
      'border rounded-md'
    )}
    onClick={onClick}
  >
    {cloneElement(icon, { className: 'w-7 h-7' })}
    <span className='whitespace-nowrap'>{children}</span>
  </Button>
)

export default SignInButton
