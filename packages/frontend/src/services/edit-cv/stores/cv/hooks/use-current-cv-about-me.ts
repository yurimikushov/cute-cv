import { useAction, useAtom } from '@reatom/npm-react'
import { useCurrentCvStore } from './use-current-cv-store'

const useCurrentCvAboutMe = () => {
  const { spyAboutMe, updateAboutMe } = useCurrentCvStore()

  return {
    aboutMe: useAtom(spyAboutMe, [spyAboutMe])[0],
    updateAboutMe: useAction(updateAboutMe, [updateAboutMe]),
  }
}

export { useCurrentCvAboutMe }
