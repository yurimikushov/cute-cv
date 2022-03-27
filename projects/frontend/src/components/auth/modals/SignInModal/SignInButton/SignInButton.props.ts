import { ReactElement, ReactNode } from 'react'

type SignInButtonProps = {
  className?: string
  icon: ReactElement
  children: ReactNode
  onClick: () => void
}

export default SignInButtonProps
