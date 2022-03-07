import { RootState } from 'services/store'
import { EditableState } from './model'

const selectEditable = ({ cv }: RootState): EditableState['editable'] => {
  return cv.editable.editable
}

export { selectEditable }
