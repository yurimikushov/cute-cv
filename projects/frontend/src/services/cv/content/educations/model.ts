type EducationT = {
  id: string
  degree: string
  university: string
  duration: string
}

type EducationsStateT = {
  ids: Array<string>
  educationsById: Record<string, EducationT>
}

type PresetPayloadT = {
  educations: Array<EducationT>
}

type UpdateDegreePayloadT = {
  id: string
  degree: string
}

type UpdateUniversityPayloadT = {
  id: string
  university: string
}

type UpdateDurationPayloadT = {
  id: string
  duration: string
}

type DeletePayloadT = {
  id: string
}

export type {
  EducationsStateT,
  PresetPayloadT,
  UpdateDegreePayloadT,
  UpdateUniversityPayloadT,
  UpdateDurationPayloadT,
  DeletePayloadT,
}
