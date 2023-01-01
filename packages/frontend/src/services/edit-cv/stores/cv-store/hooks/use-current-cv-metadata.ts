import { useAtom } from '@reatom/npm-react'
import { useCurrentCvStore } from './use-current-cv-store'

const useCurrentCvMetadata = () => {
  const { spyMetadata } = useCurrentCvStore()

  return [useAtom(spyMetadata, [spyMetadata])[0]] as const
}

export { useCurrentCvMetadata }
