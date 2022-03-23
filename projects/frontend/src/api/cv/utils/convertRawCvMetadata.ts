import { RawMetadata } from '../model'

const convertRawCvMetadata = (metadata: RawMetadata) => {
  const { id, savedAt, allowShare = false } = metadata

  return {
    ...metadata,
    publicId: id,
    savedAt: new Date(savedAt),
    allowShare,
  }
}

export default convertRawCvMetadata
