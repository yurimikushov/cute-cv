type VersionsState = {
  ids: Array<string>
  byId: Record<string, Version>
}

type Version = {
  metadata: Metadata
  content: Content | null
}

type Metadata = {
  id: string
  name: string
  isSaved: boolean
  savedAt: Date | null
}

type Content = {
  fullName: string
  position: string
  avatar: {
    src: string | null
  }
  aboutMe: string
  experiences: {
    ids: Array<string>
    byId: Record<string, Experience>
  }
  educations: {
    ids: Array<string>
    byId: Record<string, Education>
  }
  contacts: {
    ids: Array<string>
    byId: Record<string, Contact>
  }
  technologies: string
  languages: {
    ids: Array<string>
    byId: Record<string, Language>
  }
}

type Experience = {
  id: string
  position: string
  company: string
  duration: string
  description: string
}

type Education = {
  id: string
  degree: string
  university: string
  duration: string
}

type Contact = {
  id: string
  text: string
  href: string
}

type Language = {
  id: string
  language: string
}

export type { VersionsState }
