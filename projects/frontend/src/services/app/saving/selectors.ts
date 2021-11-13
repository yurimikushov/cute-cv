import { RootStateT } from 'services/store'
import { SavingStateT } from './model'

const selectIsSaved = ({ app }: RootStateT): SavingStateT['isSaved'] => {
  return app.saving.isSaved
}

const selectSavedAt = ({ app }: RootStateT): SavingStateT['savedAt'] => {
  return app.saving.savedAt
}

export { selectIsSaved, selectSavedAt }
