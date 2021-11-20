import { User } from 'firebase/auth'

type SignInState = {
  user: User
  token: string
}

export type { SignInState }
