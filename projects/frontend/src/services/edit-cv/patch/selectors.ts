import { RootState } from 'services/store'

const selectIsPatching = (state: RootState): boolean => {
  return state['edit-cv'].patch.isPatching
}

export { selectIsPatching }
