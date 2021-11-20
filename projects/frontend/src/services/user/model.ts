type UserT = {
  uid: string
  displayName: string | null
  email: string | null
}

type UserStateT = {
  user: UserT | null
}

type SetUserPayloadT = {
  user: UserT
}

export type { UserStateT, SetUserPayloadT }
