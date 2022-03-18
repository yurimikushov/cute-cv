import { RawCv } from '../model'
import convertRawCvMetadata from './convertRawCvMetadata'

const convertRawCv = (cv: RawCv) => {
  const { metadata, content } = cv

  return {
    metadata: convertRawCvMetadata(metadata),
    content,
  }
}

export default convertRawCv
