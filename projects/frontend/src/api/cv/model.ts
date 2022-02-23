import { CV } from 'services/cv'

type LoadAllResult = Array<Metadata>

type LoadResult = {
  metadata: Metadata
  content: CV
}

type SaveResult = Metadata

type SavePayload = {
  id: string
  name: string
  number: number
  cv: CV
}

type Metadata = {
  id: string
  name: string
  number: number
  savedAt: string
}

export type { LoadAllResult, LoadResult, SavePayload, SaveResult }
