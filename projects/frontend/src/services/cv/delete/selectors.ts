import { RootState } from 'services/store'

const selectIsDeleting = ({ cv }: RootState): boolean => {
  return cv.delete.isDeleting
}

export { selectIsDeleting }
