import { RootStateT } from 'services/store'
import { EditableStateT } from './model'

const selectEditable = ({ app }: RootStateT): EditableStateT['editable'] => {
  return app.editable.editable
}

export { selectEditable }
