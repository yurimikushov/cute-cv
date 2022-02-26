import { nanoid } from '@reduxjs/toolkit'
import { VERSION_PREFIX } from '../constants'
import { Version } from '../model'

const DEFAULT_CV_NUMBER = 1

const createCv = (id = nanoid(), number = DEFAULT_CV_NUMBER): Version => {
  const experienceId = nanoid()
  const educationId = nanoid()
  const contactId = nanoid()
  const languageId = nanoid()

  return {
    metadata: {
      id,
      name: `${VERSION_PREFIX}${number}`,
      number,
      isNew: true,
      isSaved: false,
      savedAt: null,
    },
    content: {
      fullName: '',
      position: '',
      aboutMe: '',
      avatar: null,
      experiences: {
        ids: [experienceId],
        byId: {
          [experienceId]: {
            id: experienceId,
            position: '',
            company: '',
            duration: '',
            description: '',
          },
        },
      },
      educations: {
        ids: [educationId],
        byId: {
          [educationId]: {
            id: educationId,
            degree: '',
            university: '',
            duration: '',
          },
        },
      },
      contacts: {
        ids: [contactId],
        byId: {
          [contactId]: {
            id: contactId,
            text: '',
            href: '',
          },
        },
      },
      technologies: '',
      languages: {
        ids: [languageId],
        byId: {
          [languageId]: {
            id: languageId,
            language: '',
          },
        },
      },
    },
  }
}

export default createCv
