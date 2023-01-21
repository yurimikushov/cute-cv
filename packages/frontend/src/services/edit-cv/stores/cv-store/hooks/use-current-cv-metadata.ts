import { useAction, useAtom } from '@reatom/npm-react'
import { useCurrentCvStore } from './use-current-cv-store'

const useCurrentCvMetadata = () => {
  const { spyMetadata, updateMetadata } = useCurrentCvStore()

  return {
    metadata: useAtom(spyMetadata, [spyMetadata])[0],
    updateMetadata: useAction(updateMetadata, [updateMetadata]),
  }
}

export { useCurrentCvMetadata }
