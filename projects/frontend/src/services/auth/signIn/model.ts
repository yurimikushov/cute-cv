import { User } from 'firebase/auth'

type SignInStateT = {
  isChecking: boolean
  isSignedIn: boolean
  isSkipped: boolean
}

type SignInChangedStateT = {
  user: User
  token: string
}

export type { SignInStateT, SignInChangedStateT }
