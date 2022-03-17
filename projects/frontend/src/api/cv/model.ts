import { CvContent } from 'services/cv'

type LoadAllResult = Array<RawMetadata>

type LoadResult = RawCv

type SavePayload = {
  publicId: string
  name: string
  number: number
  cv: Content
}

type SaveResult = RawMetadata

type PatchPayload = {
  publicId: string
  name?: string
  number?: number
  cv?: Partial<Content>
}

type PatchResult = RawMetadata

type RawCv = {
  metadata: RawMetadata
  content: RawContent
}

type RawMetadata = {
  id: string
  name: string
  number: number
  savedAt: string
}

type RawContent = CvContent

type Content = CvContent

export type {
  LoadAllResult,
  LoadResult,
  SavePayload,
  SaveResult,
  PatchPayload,
  PatchResult,
  RawCv,
  RawMetadata,
  RawContent,
}
