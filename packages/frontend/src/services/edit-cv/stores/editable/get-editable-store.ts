import { onConnect } from '@reatom/framework'
import { EditableStore } from './EditableStore'

let editableStore: EditableStore | null = null

const getEditableStore = () => {
  if (!editableStore) {
    editableStore = new EditableStore()

    onConnect(editableStore.dataAtom, (ctx) => {
      return () => {
        setTimeout(() => {
          if (ctx.isConnected()) {
            return
          }

          editableStore = null
        }, 3_000)
      }
    })
  }

  return editableStore
}

export { getEditableStore }
