import { RootStateT } from 'services/store'
import { LoadingStateT } from './model'

const selectIsLoading = ({ cv }: RootStateT): LoadingStateT['isLoading'] => {
  return cv.load.isLoading
}

export { selectIsLoading }
