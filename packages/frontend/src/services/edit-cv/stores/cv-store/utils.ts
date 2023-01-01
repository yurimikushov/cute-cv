import { atom } from '@reatom/framework'
import { nanoid } from 'nanoid'
import {
  Metadata,
  Content,
  Experience,
  Education,
  Contact,
  Language,
} from './model'

const createMetadataAtom = ({
  publicId,
  id = nanoid(),
  name,
  number,
  isNew = false,
  isSaved = true,
  savedAt,
  allowShare,
}: PartialBy<Metadata, 'id' | 'isNew' | 'isSaved'>) => {
  return atom(
    {
      publicId,
      id,
      name,
      number,
      isNew,
      isSaved,
      savedAt,
      allowShare,
    },
    'cv.metadata'
  )
}

const createContentAtom = (content: Content) => {
  const {
    fullName,
    position,
    aboutMe,
    avatar,
    experiences,
    educations,
    contacts,
    technologies,
    languages,
  } = content

  return atom(
    {
      fullName: createFullNameAtom(fullName),
      position: createPositionAtom(position),
      aboutMe: createAboutMeAtom(aboutMe),
      avatar: createAvatarAtom(avatar),
      experiences: createExperiencesAtom(experiences),
      educations: createEducationsAtom(educations),
      contacts: createContactsAtom(contacts),
      technologies: createTechnologiesAtom(technologies),
      languages: createLanguagesAtom(languages),
    },
    'cv.content'
  )
}

const createFullNameAtom = (fullName: string) => {
  return atom(fullName, 'cv.content.fullName')
}

const createPositionAtom = (position: string) => {
  return atom(position, 'cv.content.position')
}

const createAboutMeAtom = (aboutMe: string) => {
  return atom(aboutMe, 'cv.content.aboutMe')
}

const createAvatarAtom = (avatar: string | null) => {
  return atom(avatar, 'cv.content.avatar')
}

const createExperiencesAtom = (experiences: Array<Experience>) => {
  return atom(experiences.map(createExperienceAtom), 'cv.content.experiences')
}

const createExperienceAtom = ({
  id = nanoid(),
  position = '',
  company = '',
  duration = '',
  description = '',
}: Partial<Experience> = {}) => {
  return atom(
    {
      id,
      position,
      company,
      duration,
      description,
    },
    `cv.content.experience:${id}`
  )
}

const createEducationsAtom = (educations: Array<Education>) => {
  return atom(educations.map(createEducationAtom), 'cv.content.educations')
}

const createEducationAtom = ({
  id = nanoid(),
  degree = '',
  university = '',
  duration = '',
}: Partial<Education> = {}) => {
  return atom(
    {
      id,
      degree,
      university,
      duration,
    },
    `cv.content.education:${id}`
  )
}

const createContactsAtom = (contacts: Array<Contact>) => {
  return atom(contacts.map(createContactAtom), 'cv.content.contacts')
}

const createContactAtom = ({
  id = nanoid(),
  text = '',
  href = '',
}: Partial<Contact> = {}) => {
  return atom(
    {
      id,
      text,
      href,
    },
    `cv.content.contact:${id}`
  )
}

const createTechnologiesAtom = (technologies: string) => {
  return atom(technologies, 'cv.content.technologies')
}

const createLanguagesAtom = (languages: Array<Language>) => {
  return atom(languages.map(createLanguageAtom), 'cv.content.languages')
}

const createLanguageAtom = ({
  id = nanoid(),
  language = '',
}: Partial<Language> = {}) => {
  return atom(
    {
      id,
      language,
    },
    `cv.content.language:${id}`
  )
}

export {
  createMetadataAtom,
  createContentAtom,
  createExperienceAtom,
  createEducationAtom,
  createContactAtom,
  createLanguageAtom,
}
