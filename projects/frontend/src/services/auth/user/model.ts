import { User } from 'firebase/auth'

type UserStateT = {
  user: UserT | null
}

type UserT = Pick<User, 'uid' | 'displayName' | 'email'>

type SetUserPayloadT = {
  user: UserT
}

export type { UserStateT, SetUserPayloadT }
