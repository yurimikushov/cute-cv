import { CvContent } from 'services/edit-cv'

type LoadAllResult = Array<RawMetadata>

type LoadResult = RawCv

type LoadSharableResult = RawCv

type AddPayload = {
  name: string
  number: number
  allowShare: boolean
  cv: Content
}

type AddResult = RawMetadata

type UpdatePayload = {
  publicId: string
  name: string
  number: number
  allowShare: boolean
  cv: Content
}

type UpdateResult = RawMetadata

type PatchPayload = {
  publicId: string
  name?: string
  number?: number
  allowShare?: boolean
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
  allowShare?: boolean
}

type RawContent = CvContent

type Content = CvContent

export type {
  LoadAllResult,
  LoadResult,
  LoadSharableResult,
  AddPayload,
  AddResult,
  UpdatePayload,
  UpdateResult,
  PatchPayload,
  PatchResult,
  RawCv,
  RawMetadata,
  RawContent,
}
