type MetadataStateT = {
  isSaved: boolean
  savedAt: Date | null
}

type SavedPayloadT = {
  savedAt: Date | null
}

type MetadataT = {
  savedAt: Date | null
}

export type { MetadataStateT, SavedPayloadT, MetadataT }
