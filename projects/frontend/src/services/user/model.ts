import { UserT } from 'services/auth'

type UserStateT = {
  user: UserT | null
}

type SetUserPayloadT = {
  user: UserT
}

export type { UserStateT, SetUserPayloadT }
