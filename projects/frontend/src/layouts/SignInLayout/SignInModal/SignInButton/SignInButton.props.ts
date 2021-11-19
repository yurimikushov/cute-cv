import { ReactElement, ReactNode } from 'react'

type SignInButtonPropsT = {
  className?: string
  icon: ReactElement
  children: ReactNode
  onClick: () => void
}

export default SignInButtonPropsT
