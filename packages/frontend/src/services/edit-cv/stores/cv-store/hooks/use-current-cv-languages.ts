import { useAction, useAtom } from '@reatom/npm-react'
import { useCurrentCvStore } from './use-current-cv-store'

const useCurrentCvLanguages = () => {
  const { spyLanguages, addLanguage } = useCurrentCvStore()

  return {
    languages: useAtom(spyLanguages, [spyLanguages])[0],
    addLanguage: useAction(addLanguage, [addLanguage]),
  }
}

export { useCurrentCvLanguages }
