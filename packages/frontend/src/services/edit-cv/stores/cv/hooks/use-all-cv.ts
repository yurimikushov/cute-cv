import { useEffect } from 'react'
import { useAction, useAtom, useCtx } from '@reatom/npm-react'
import { getAllCvStore } from '../get-all-cv-store'

type Options = {
  policy?: 'fetch-if-needed' | 'cache-only'
  skip?: boolean
}

const useAllCv = ({
  policy = 'fetch-if-needed',
  skip = false,
}: Options = {}) => {
  const ctx = useCtx()

  const { spyIsLoading, spyAllCv, spyLoadingError, isLoadNeeded, loadAllCv } =
    getAllCvStore()

  useEffect(() => {
    if (skip) {
      return
    }

    if (policy === 'fetch-if-needed' && isLoadNeeded(ctx)) {
      loadAllCv(ctx)
    }
  }, [policy, skip, ctx, isLoadNeeded, loadAllCv])

  // const deleteCv = useAction(addCv, [deleteCv])

  return {
    isLoading: useAtom(spyIsLoading, [spyIsLoading])[0],
    data: useAtom(spyAllCv, [spyAllCv])[0],
    error: useAtom(spyLoadingError, [spyLoadingError])[0],
    refetch: useAction(loadAllCv, [loadAllCv]),
  }
}

export { useAllCv }
