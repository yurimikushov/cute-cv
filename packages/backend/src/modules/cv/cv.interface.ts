import { Timestamp } from 'firebase-admin/firestore'

type Id = string
type UserId = Id
type CvId = Id

interface CV {
  metadata: Metadata
  content: Content
}

interface IncomingCV {
  metadata: Omit<Metadata, 'id' | 'savedAt'>
  content: Content
}

interface PartialCV {
  metadata?: Partial<Metadata>
  content?: Partial<Content>
}

type RawCv = {
  metadata: RawMetadata
  content: Content
}

interface Metadata {
  id: string
  name: string
  number: number
  savedAt: string
  allowShare: boolean
}

interface RawMetadata {
  id: string
  name: string
  number: number
  savedAt: Timestamp
  allowShare: boolean
}

interface Content {
  fullName: string
  position: string
  avatar: string
  aboutMe: string
  experiences: Array<Experience>
  educations: Array<Education>
  contacts: Array<Contact>
  technologies: string
  languages: Array<Language>
}

interface Experience {
  id: Id
  position: string
  company: string
  duration: string
  description: string
}

interface Education {
  id: Id
  degree: string
  university: string
  duration: string
}

interface Contact {
  id: Id
  text: string
  href: string
}

interface Language {
  id: Id
  language: string
}

export type {
  UserId,
  CvId,
  CV,
  IncomingCV,
  PartialCV,
  RawCv,
  Metadata,
  Content,
}
