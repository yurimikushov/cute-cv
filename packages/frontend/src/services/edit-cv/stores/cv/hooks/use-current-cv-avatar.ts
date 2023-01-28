import { useAction, useAtom } from '@reatom/npm-react'
import { useCurrentCvStore } from './use-current-cv-store'

const useCurrentCvAvatar = () => {
  const { spyAvatar, updateAvatar } = useCurrentCvStore()

  return {
    avatar: useAtom(spyAvatar, [spyAvatar])[0],
    updateAvatar: useAction(updateAvatar, [updateAvatar]),
    deleteAvatar: useAction((ctx) => updateAvatar(ctx, null), [updateAvatar]),
  }
}

export { useCurrentCvAvatar }
