import { CV } from 'services/cv'

type LoadAllResult = Array<Metadata>

type LoadResult = {
  metadata: Metadata
  content: CV
}

type SaveResult = Metadata

type Metadata = {
  id: string
  name: string
  savedAt: string
}

type SavePayload = {
  metadata: {
    name: string
  }
  content: CV
}

export type { LoadAllResult, LoadResult, SaveResult, SavePayload }
