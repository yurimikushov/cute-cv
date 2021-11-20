import { User } from 'firebase/auth'

type AuthStateT = {
  user: UserT | null
}

type UserT = Pick<User, 'uid' | 'displayName' | 'email'>

type SetUserPayloadT = {
  user: UserT
}

type SignInState = {
  user: User
  token: string
}

export type { AuthStateT, SignInState, SetUserPayloadT }
