import { RootState } from 'services/store'

const selectIsPatching = ({ cv }: RootState): boolean => {
  return cv.patch.isPatching
}

export { selectIsPatching }
