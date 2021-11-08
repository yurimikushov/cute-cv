type EducationsT = {
  id: string
  degree: string
  university: string
  duration: string
}

type EducationsStateT = {
  ids: Array<string>
  educationsById: Record<string, EducationsT>
}

type UpdatePayloadT = {
  id: string
  degree: string
  university: string
  duration: string
}

type DeletePayloadT = {
  id: string
}

export type { EducationsStateT, UpdatePayloadT, DeletePayloadT }
