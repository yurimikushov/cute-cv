import { useEffect } from 'react'
import { useAction, useAtom, useCtx } from '@reatom/npm-react'
import { useCvStore } from './use-cv-store'

type Options = {
  policy?: 'fetch-if-needed' | 'cache-only'
  skip?: boolean
}

const useCv = (
  id: string,
  { policy = 'fetch-if-needed', skip = false }: Options = {}
) => {
  const ctx = useCtx()

  const { isFetchNeeded, fetchAction, spyStoreState, updateAction } =
    useCvStore(id)

  useEffect(() => {
    if (skip) {
      return
    }

    if (policy === 'fetch-if-needed' && isFetchNeeded(ctx)) {
      fetchAction(ctx)
    }
  }, [policy, skip, ctx, isFetchNeeded, fetchAction])

  const [cvStoreState] = useAtom(spyStoreState, [spyStoreState])

  const refetch = useAction(fetchAction, [fetchAction])

  const update = useAction(updateAction, [updateAction])

  return {
    ...cvStoreState,
    refetch,
    update,
  }
}

export default useCv
