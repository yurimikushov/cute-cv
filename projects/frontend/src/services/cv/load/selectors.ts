import { RootStateT } from 'services/store'
import { LoadingStateT } from './model'

const selectIsLoading = ({ cv }: RootStateT): LoadingStateT['isLoading'] => {
  return cv.loading.isLoading
}

export { selectIsLoading }
