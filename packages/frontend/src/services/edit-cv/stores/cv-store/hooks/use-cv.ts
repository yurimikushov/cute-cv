import { useEffect } from 'react'
import { useAction, useAtom, useCtx } from '@reatom/npm-react'
import { useCvStore } from './use-cv-store'

type Options = {
  policy?: 'fetch-if-needed' | 'cache-only'
  skip?: boolean
}

const useCv = (
  publicId: string | null,
  id: string,
  { policy = 'fetch-if-needed', skip = false }: Options = {}
) => {
  const ctx = useCtx()

  const { spyIsLoading, spyCv, spyLoadingError, isLoadNeeded, loadCv } =
    useCvStore(publicId, id)

  useEffect(() => {
    if (skip) {
      return
    }

    if (policy === 'fetch-if-needed' && isLoadNeeded(ctx)) {
      loadCv(ctx)
    }
  }, [policy, skip, ctx, isLoadNeeded, loadCv])

  return {
    isLoading: useAtom(spyIsLoading, [spyIsLoading])[0],
    data: useAtom(spyCv, [spyCv])[0],
    error: useAtom(spyLoadingError, [spyLoadingError])[0],
    refetch: useAction(loadCv, [loadCv]),
  }
}

export { useCv }
