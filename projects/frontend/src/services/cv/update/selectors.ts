import { RootState } from 'services/store'

const selectIsUpdating = ({ cv }: RootState): boolean => {
  return cv.update.isUpdating
}

export { selectIsUpdating }
