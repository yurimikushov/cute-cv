import { User } from 'firebase/auth'

type AuthStateT = {
  isChecking: boolean
  isSignedIn: boolean
  user: UserT | null
}

type UserT = Pick<User, 'uid' | 'displayName' | 'email'>

type SetUserPayloadT = {
  user: UserT
}

type SignInStateT = {
  user: User
  token: string
}

export type { AuthStateT, SignInStateT, SetUserPayloadT }
