import { nanoid } from '@reduxjs/toolkit'
import { VERSION_PREFIX } from '../constants'
import { Version } from '../model'

const createCv = (name = `${VERSION_PREFIX}1`): Version => {
  const id = nanoid()
  const experienceId = nanoid()
  const educationId = nanoid()
  const contactId = nanoid()
  const languageId = nanoid()

  return {
    metadata: {
      id,
      name,
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
