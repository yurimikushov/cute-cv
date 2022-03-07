import { User } from 'firebase/auth'

type SignInState = {
  isChecking: boolean
  isSignedIn: boolean
  isSkipped: boolean
  isModalDisplayed: boolean
}

type SignInChangedState = {
  user: User
  token: string
}

export type { SignInState, SignInChangedState }
