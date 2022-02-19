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
  experiences: Array<ExperienceI>
  educations: Array<EducationI>
  contacts: Array<ContactI>
  technologies: string
  languages: Array<LanguageI>
}

interface ExperienceI {
  id: string
  position: string
  company: string
  duration: string
  description: string
}

interface EducationI {
  id: string
  degree: string
  university: string
  duration: string
}

interface ContactI {
  id: string
  text: string
  href: string
}

interface LanguageI {
  id: string
  language: string
}

export type { CV, Content }
