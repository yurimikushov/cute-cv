import { nanoid } from '@reduxjs/toolkit'
import { Version } from '../model'

const DEFAULT_CV_NUMBER = 1

type CreateCvParams = {
  id?: string
  name?: string
  number?: number
}

const createCv = ({
  id = nanoid(),
  name = 'Dummy',
  number = DEFAULT_CV_NUMBER,
}: CreateCvParams = {}): Version => {
  const experienceId = nanoid()
  const educationId = nanoid()
  const contactId = nanoid()
  const languageId = nanoid()

  return {
    metadata: {
      id,
      name,
      number,
      isNew: true,
      isSaved: false,
      savedAt: null,
      allowShare: false,
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
