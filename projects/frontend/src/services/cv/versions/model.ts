type VersionsState = {
  ids: Array<string>
  byId: Record<string, Version>
  currentId: string | null
}

type Version = {
  metadata: Metadata
  content: Content
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
  avatar: string | null
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

type UpdateFullNamePayload = {
  id: string
  fullName: string
}

type UpdatePositionPayload = {
  id: string
  position: string
}

type UpdateAboutMePayload = {
  id: string
  aboutMe: string
}

type UpdateAvatarPayload = {
  id: string
  src: string
}

type DeleteAvatarPayload = {
  id: string
}

type UpdateExperiencePayload = {
  id: string
  experienceId: string
  position: string
  company: string
  duration: string
  description: string
}

type UpdateEducationPayload = {
  id: string
  educationId: string
  degree: string
  university: string
  duration: string
}

type UpdateContactPayload = {
  id: string
  contactId: string
  text: string
  href: string
}

type UpdateTechnologiesPayload = {
  id: string
  technologies: string
}

type UpdateLanguagePayload = {
  id: string
  languageId: string
  language: string
}

type SelectCvPayload = {
  id: string
}

export type {
  VersionsState,
  Version,
  UpdateFullNamePayload,
  UpdatePositionPayload,
  UpdateAboutMePayload,
  UpdateAvatarPayload,
  DeleteAvatarPayload,
  UpdateExperiencePayload,
  UpdateEducationPayload,
  UpdateContactPayload,
  UpdateTechnologiesPayload,
  UpdateLanguagePayload,
  SelectCvPayload,
}
