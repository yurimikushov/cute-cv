import { User as FirebaseUser } from 'firebase/auth'

type UserState = {
  user: User | null
}

type User = Pick<FirebaseUser, 'uid' | 'displayName' | 'email'>

type SetUserPayload = {
  user: User
}

export type { UserState, SetUserPayload }
