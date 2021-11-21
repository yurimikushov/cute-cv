import { RootStateT } from 'services/store'
import { NameStateT } from './model'

const selectFullName = ({ cv }: RootStateT): NameStateT['fullName'] => {
  return cv.content.name.fullName
}

export { selectFullName }
