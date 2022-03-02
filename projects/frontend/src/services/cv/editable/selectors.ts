import { RootState } from 'services/store'
import { EditableStateT } from './model'

const selectEditable = ({ cv }: RootState): EditableStateT['editable'] => {
  return cv.editable.editable
}

export { selectEditable }
