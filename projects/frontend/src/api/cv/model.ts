import { CV } from 'services/cv'

type LoadAllResult = Array<{
  id: string
  name: string
}>

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

export type { LoadAllResult, LoadResult, SaveResult, SavePayload }
