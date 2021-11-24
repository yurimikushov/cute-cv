import { CV } from 'services/cv'

type LoadResultT = {
  metadata: MetadataT
  content: CV
}

type SaveResultT = MetadataT

type MetadataT = {
  savedAt: string
}

export type { LoadResultT, SaveResultT }
