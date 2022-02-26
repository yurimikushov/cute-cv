import { RootStateT } from 'services/store'

const selectIsDeleting = ({ cv }: RootStateT): boolean => {
  return cv.delete.isDeleting
}

export { selectIsDeleting }
