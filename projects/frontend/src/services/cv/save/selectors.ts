import { RootStateT } from 'services/store'
import { SavingStateT } from './model'

const selectIsSaved = ({ cv }: RootStateT): SavingStateT['isSaved'] => {
  return cv.saving.isSaved
}

const selectSavedAt = ({ cv }: RootStateT): SavingStateT['savedAt'] => {
  return cv.saving.savedAt
}

export { selectIsSaved, selectSavedAt }
