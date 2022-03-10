import { CvMetadata, CvContent } from 'services/cv'

type LoadAllResult = Array<Metadata>

type LoadResult = {
  metadata: Metadata
  content: Content
}

type SavePayload = {
  id: string
  name: string
  number: number
  cv: Content
}

type SaveResult = Metadata

type PatchPayload = {
  id: string
  name?: string
  number?: number
  cv?: Partial<Content>
}

type PatchResult = Metadata

type Metadata = Pick<CvMetadata, 'id' | 'name' | 'number'> & {
  savedAt: string
}

type Content = CvContent

export type {
  LoadAllResult,
  LoadResult,
  SavePayload,
  SaveResult,
  PatchPayload,
  PatchResult,
}
