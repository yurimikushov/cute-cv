import { RootState } from 'services/store'

const selectIsDeleting = (state: RootState): boolean => {
  return state['edit-cv'].delete.isDeleting
}

export { selectIsDeleting }
