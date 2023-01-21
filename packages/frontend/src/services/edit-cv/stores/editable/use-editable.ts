import { useAction, useAtom } from '@reatom/npm-react'
import { getCurrentCvIdStore } from './get-editable-store'

const useEditable = () => {
  const { spyEditable, toggleEditable } = getCurrentCvIdStore()

  return {
    editable: useAtom(spyEditable)[0],
    toggleEditable: useAction(toggleEditable, [toggleEditable]),
  }
}

export { useEditable }
