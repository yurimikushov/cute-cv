import { useAction, useAtom } from '@reatom/npm-react'
import { getEditableStore } from './get-editable-store'

const useEditable = () => {
  const { spyEditable, toggleEditable } = getEditableStore()

  return {
    editable: useAtom(spyEditable)[0],
    toggleEditable: useAction(toggleEditable, [toggleEditable]),
  }
}

export { useEditable }
