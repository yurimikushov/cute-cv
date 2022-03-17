import { RawMetadata } from '../model'

const convertRawCvMetadata = (metadata: RawMetadata) => {
  const { id, savedAt } = metadata

  return {
    ...metadata,
    publicId: id,
    savedAt: new Date(savedAt),
  }
}

export default convertRawCvMetadata
