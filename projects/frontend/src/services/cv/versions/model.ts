type VersionsState = {
  ids: Array<string>
  byId: Record<string, Version>
  currentId: string
}

type Version = {
  metadata: Metadata
  content: Content
}

type Metadata = {
  id: string
  name: string
  number: number
  isNew: boolean
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

type UpdateCvPayload = {
  metadata: {
    id: string
    name: string
    number: number
    savedAt: string
  }
  content: {
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
}

type UpdateCvMetadataPayload = Pick<
  Metadata,
  'id' | 'isNew' | 'isSaved' | 'savedAt'
>

type MarkAsSavedPayload = {
  id: string
  savedAt: Date
}

type MarkAsUnsavedPayload = {
  id: string
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

type AddExperiencePayload = {
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

type ReorderExperiencePayload = {
  id: string
  startIndex: number
  endIndex: number
}

type DeleteExperiencePayload = {
  id: string
  experienceId: string
}

type AddEducationPayload = {
  id: string
}

type UpdateEducationPayload = {
  id: string
  educationId: string
  degree: string
  university: string
  duration: string
}

type ReorderEducationPayload = {
  id: string
  startIndex: number
  endIndex: number
}

type DeleteEducationPayload = {
  id: string
  educationId: string
}

type AddContactPayload = {
  id: string
}

type UpdateContactPayload = {
  id: string
  contactId: string
  text: string
  href: string
}

type ReorderContactPayload = {
  id: string
  startIndex: number
  endIndex: number
}

type DeleteContactPayload = {
  id: string
  contactId: string
}

type UpdateTechnologiesPayload = {
  id: string
  technologies: string
}

type AddLanguagePayload = {
  id: string
}

type UpdateLanguagePayload = {
  id: string
  languageId: string
  language: string
}

type DeleteLanguagePayload = {
  id: string
  languageId: string
}

type AddCvPayload = {
  id: string
  number: number
}

type DeleteCvPayload = {
  id: string
}

type SelectCvPayload = {
  id: string
}

export type {
  VersionsState,
  Version,
  Content,
  UpdateCvPayload,
  UpdateCvMetadataPayload,
  MarkAsSavedPayload,
  MarkAsUnsavedPayload,
  UpdateFullNamePayload,
  UpdatePositionPayload,
  UpdateAboutMePayload,
  UpdateAvatarPayload,
  DeleteAvatarPayload,
  AddExperiencePayload,
  UpdateExperiencePayload,
  ReorderExperiencePayload,
  DeleteExperiencePayload,
  AddEducationPayload,
  UpdateEducationPayload,
  ReorderEducationPayload,
  DeleteEducationPayload,
  AddContactPayload,
  UpdateContactPayload,
  ReorderContactPayload,
  DeleteContactPayload,
  UpdateTechnologiesPayload,
  AddLanguagePayload,
  UpdateLanguagePayload,
  DeleteLanguagePayload,
  AddCvPayload,
  DeleteCvPayload,
  SelectCvPayload,
}
