import { RootState } from 'services/store'

const selectIsAdding = ({ cv }: RootState): boolean => {
  return cv.add.isAdding
}

export { selectIsAdding }
