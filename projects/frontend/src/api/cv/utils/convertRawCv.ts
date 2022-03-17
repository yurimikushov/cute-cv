import { RawCv } from '../model'

const convertRawCv = (cv: RawCv) => {
  const { metadata, content } = cv
  const { id, savedAt } = metadata

  return {
    metadata: {
      ...metadata,
      publicId: id,
      savedAt: new Date(savedAt),
    },
    content,
  }
}

export default convertRawCv
