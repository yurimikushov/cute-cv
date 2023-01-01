import { useAction, useAtom } from '@reatom/npm-react'
import { useCurrentCvStore } from './use-current-cv-store'

const useCurrentCvContacts = () => {
  const { spyContacts, updateContacts } = useCurrentCvStore()

  return [
    useAtom(spyContacts, [spyContacts])[0],
    useAction(updateContacts, [updateContacts]),
  ] as const
}

export { useCurrentCvContacts }
