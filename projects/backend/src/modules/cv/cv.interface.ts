type Id = string
type UserId = Id
type CvId = Id

interface CV {
  metadata: Omit<Metadata, 'id' | 'savedAt'>
  content: Content
}

interface Metadata {
  id: string
  name: string
  number: number
  savedAt: string
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

export type { UserId, CvId, CV, Metadata, Content }
