import { useAction, useAtom } from '@reatom/npm-react'
import { useCurrentCvStore } from './use-current-cv-store'

const useCurrentCvContacts = () => {
  const { spyContacts, addContact, reorderContacts } = useCurrentCvStore()

  return {
    contacts: useAtom(spyContacts, [spyContacts])[0],
    addContact: useAction(addContact, [addContact]),
    reorderContacts: useAction(reorderContacts, [reorderContacts]),
  }
}

export { useCurrentCvContacts }
