interface CV {
  metadata: Metadata
  content: Content
}

interface Metadata {
  name: string
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
  id: string
  position: string
  company: string
  duration: string
  description: string
}

interface Education {
  id: string
  degree: string
  university: string
  duration: string
}

interface Contact {
  id: string
  text: string
  href: string
}

interface Language {
  id: string
  language: string
}

export type { CV, Content }
