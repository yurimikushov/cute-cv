import { RootStateT } from 'services/store'

const selectIsLoading = ({ cv }: RootStateT): boolean => {
  return cv.load.isLoadingAll || cv.load.isLoading
}

export { selectIsLoading }
