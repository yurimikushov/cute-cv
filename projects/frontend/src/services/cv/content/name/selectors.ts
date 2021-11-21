import { RootStateT } from 'services/store'
import { NameStateT } from './model'

const selectFullName = ({ cv }: RootStateT): NameStateT['fullName'] => {
  return cv.name.fullName
}

export { selectFullName }
