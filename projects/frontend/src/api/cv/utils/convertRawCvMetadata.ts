import { RawMetadata } from '../model'

const convertRawCvMetadata = (metadata: RawMetadata) => {
  const { savedAt } = metadata

  return {
    ...metadata,
    savedAt: new Date(savedAt),
  }
}

export default convertRawCvMetadata
