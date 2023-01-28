type Metadata = {
  publicId: string | null
  id: string
  name: string
  number: number
  isNew: boolean
  isSaved: boolean
  savedAt: Date | null
  allowShare: boolean
}

type Content = {
  fullName: string
  position: string
  avatar: string | null
  aboutMe: string
  experiences: Array<Experience>
  educations: Array<Education>
  contacts: Array<Contact>
  technologies: string
  languages: Array<Language>
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

export type { Metadata, Content, Experience, Education, Contact, Language }
