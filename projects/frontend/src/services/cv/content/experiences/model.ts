type ExperienceT = {
  id: string
  position: string
  company: string
  duration: string
  description: string
}

type ExperiencesStateT = {
  ids: Array<string>
  experiencesById: Record<string, ExperienceT>
}

type UpdatePositionPayloadT = {
  id: string
  position: string
}

type UpdateCompanyPayloadT = {
  id: string
  company: string
}

type UpdateDurationPayloadT = {
  id: string
  duration: string
}

type UpdateDescriptionPayloadT = {
  id: string
  description: string
}

type DeletePayloadT = {
  id: string
}

type ReorderPayloadT = {
  startIndex: number
  endIndex: number
}

export type {
  ExperiencesStateT,
  UpdatePositionPayloadT,
  UpdateCompanyPayloadT,
  UpdateDurationPayloadT,
  UpdateDescriptionPayloadT,
  DeletePayloadT,
  ReorderPayloadT,
}
