import { User } from 'firebase/auth'

type UserT = User

type SignInState = {
  user: User
  token: string
}

export type { UserT, SignInState }
