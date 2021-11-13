import { RootStateT } from 'services/store'
import { LoadingStateT } from './model'

const selectIsLoading = ({ app }: RootStateT): LoadingStateT['isLoading'] => {
  return app.loading.isLoading
}

export { selectIsLoading }
