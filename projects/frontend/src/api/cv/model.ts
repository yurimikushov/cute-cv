import { CV } from 'services/cv'

type LoadAllResult = Array<Metadata>

type LoadResult = {
  metadata: Metadata
  content: CV
}

type SavePayload = {
  id: string
  name: string
  number: number
  cv: CV
}

type SaveResult = Metadata

type PatchPayload = {
  id: string
  name?: string
  number?: number
  cv?: Partial<CV>
}

type PatchResult = Metadata

type Metadata = {
  id: string
  name: string
  number: number
  savedAt: string
}

export type {
  LoadAllResult,
  LoadResult,
  SavePayload,
  SaveResult,
  PatchPayload,
  PatchResult,
}
