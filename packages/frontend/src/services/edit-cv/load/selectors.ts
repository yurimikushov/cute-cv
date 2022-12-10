import { RootState } from 'services/store'

const selectIsLoading = (state: RootState): boolean => {
  return state['edit-cv'].load.isLoadingAll || state['edit-cv'].load.isLoading
}

export { selectIsLoading }
