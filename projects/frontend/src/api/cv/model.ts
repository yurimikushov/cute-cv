import { CV } from 'services/cv'

type LoadResultT = {
  metadata: MetadataT
  content: CV
}

type SaveResultT = MetadataT

type MetadataT = {
  savedAt: string
}

type SavePayload = {
  metadata: {
    name: string
  }
  content: CV
}

export type { LoadResultT, SaveResultT, SavePayload }
