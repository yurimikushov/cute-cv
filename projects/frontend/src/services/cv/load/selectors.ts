import { RootState } from 'services/store'

const selectIsLoading = ({ cv }: RootState): boolean => {
  return cv.load.isLoadingAll || cv.load.isLoading
}

export { selectIsLoading }
