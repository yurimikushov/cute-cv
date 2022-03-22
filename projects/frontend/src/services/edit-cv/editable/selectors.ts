import { RootState } from 'services/store'
import { EditableState } from './model'

const selectEditable = (state: RootState): EditableState['editable'] => {
  return state['edit-cv'].editable.editable
}

export { selectEditable }
