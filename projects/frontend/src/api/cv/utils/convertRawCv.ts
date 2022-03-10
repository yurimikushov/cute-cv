import { RawCv } from '../model'

const convertRawCv = (cv: RawCv) => {
  const { metadata, content } = cv
  const { savedAt } = metadata

  return {
    metadata: {
      ...metadata,
      savedAt: new Date(savedAt),
    },
    content,
  }
}

export default convertRawCv
