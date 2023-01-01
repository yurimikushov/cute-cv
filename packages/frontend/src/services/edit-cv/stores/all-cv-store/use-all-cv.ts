import { useEffect } from 'react'
import { useAction, useAtom, useCtx } from '@reatom/npm-react'
import { getAllCvStore } from './get-all-cv-store'

type Options = {
  policy?: 'fetch-if-needed' | 'cache-only'
  skip?: boolean
}

const useAllCv = ({ policy = 'fetch-if-needed', skip = false }: Options = {}) => {
  const ctx = useCtx()

  const { isFetchNeeded, fetchAction, spyStoreState } = getAllCvStore()

  useEffect(() => {
    if (skip) {
      return
    }


    if (policy === 'fetch-if-needed' && isFetchNeeded(ctx)) {
      fetchAction(ctx)
    }
  }, [policy, skip, ctx, isFetchNeeded, fetchAction])

  const [allCvStoreState] = useAtom(spyStoreState, [spyStoreState])

  const refetch = useAction(fetchAction, [fetchAction])

  return {
    ...allCvStoreState,
    refetch,
  }
}

export { useAllCv }
