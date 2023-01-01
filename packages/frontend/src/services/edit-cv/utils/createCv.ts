import { nanoid } from 'nanoid'

type CreateCvOptions = {
  id?: string
  name?: string
  number?: number
  allowShare?: boolean
}

const createCv = ({
  id = nanoid(),
  name = 'Dummy',
  number = 1,
  allowShare = false,
}: CreateCvOptions = {}) => {
  return {
    metadata: {
      id,
      name,
      number,
      isNew: true,
      isSaved: false,
      savedAt: null,
      allowShare,
    },
    content: {
      fullName: '',
      position: '',
      aboutMe: '',
      avatar: null,
      experiences: [
        {
          id: nanoid(),
          position: '',
          company: '',
          duration: '',
          description: '',
        },
      ],
      educations: [
        {
          id: nanoid(),
          degree: '',
          university: '',
          duration: '',
        },
      ],
      contacts: [
        {
          id: nanoid(),
          text: '',
          href: '',
        },
      ],
      technologies: '',
      languages: [
        {
          id: nanoid(),
          language: '',
        },
      ],
    },
  }
}

export default createCv
