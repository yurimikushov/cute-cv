import { CV } from 'services/cv'

type LoadResult = {
  metadata: Metadata
  content: CV
}

type SaveResult = Metadata

type Metadata = {
  savedAt: string
}

type SavePayload = {
  metadata: {
    name: string
  }
  content: CV
}

export type { LoadResult, SaveResult, SavePayload }
