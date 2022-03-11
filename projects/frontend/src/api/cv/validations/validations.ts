import { cvSchema, cvMetadataSchema } from './schemas'

const validateCv = (cv: unknown) => cvSchema.validateSync(cv)

const validateCvMetadata = (cvMetadata: unknown) =>
  cvMetadataSchema.validateSync(cvMetadata)

export { validateCv, validateCvMetadata }
