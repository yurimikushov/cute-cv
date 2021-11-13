import { RootStateT } from 'services/store'
import { LoadingStateT } from './model'

const selectLoading = ({ app }: RootStateT): LoadingStateT['loading'] => {
  return app.loading.loading
}

export { selectLoading }
