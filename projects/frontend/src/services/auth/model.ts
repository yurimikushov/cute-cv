import { User } from 'firebase/auth'

type UserT = User

type AuthStateT = {
  user: User
  token: string
}

export type { UserT, AuthStateT }
