type MetadataStateT = {
  isSaved: boolean
  savedAt: Date | null
}

type UpdatePayloadT = {
  isSaved: boolean
  savedAt: Date | null
}

export type { MetadataStateT, UpdatePayloadT }
