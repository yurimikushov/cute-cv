import { RootState } from 'services/store'

const selectIsAdding = (state: RootState): boolean => {
  return state['edit-cv'].add.isAdding
}

export { selectIsAdding }
