import { RootStateT } from 'services/store'
import { SavingStateT } from './model'

const selectIsSaved = ({ cv }: RootStateT): SavingStateT['isSaved'] => {
  return cv.save.isSaved
}

const selectSavedAt = ({ cv }: RootStateT): SavingStateT['savedAt'] => {
  return cv.save.savedAt
}

export { selectIsSaved, selectSavedAt }
