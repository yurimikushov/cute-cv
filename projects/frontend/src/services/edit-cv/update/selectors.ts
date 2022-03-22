import { RootState } from 'services/store'

const selectIsUpdating = (state: RootState): boolean => {
  return state['edit-cv'].update.isUpdating
}

export { selectIsUpdating }
