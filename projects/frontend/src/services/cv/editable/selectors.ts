import { RootStateT } from 'services/store'
import { EditableStateT } from './model'

const selectEditable = ({ cv }: RootStateT): EditableStateT['editable'] => {
  return cv.editable.editable
}

export { selectEditable }
