import { RootStateT } from 'services/store'
import { MetadataStateT } from './model'

const selectIsSaved = ({ cv }: RootStateT): MetadataStateT['isSaved'] => {
  return cv.metadata.isSaved
}

const selectSavedAt = ({ cv }: RootStateT): MetadataStateT['savedAt'] => {
  return cv.metadata.savedAt
}

export { selectIsSaved, selectSavedAt }
