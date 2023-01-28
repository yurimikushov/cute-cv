import { useCtx } from '@reatom/npm-react'
import { useMemo } from 'react'
import { getAllCvStore } from '../../cv'

const useCvStore = (id: string) => {
  const ctx = useCtx()

  return useMemo(() => {
    const allCvStore = getAllCvStore()

    if (!id) {
      return ctx.get(allCvStore.dataAtom)[0]
    }

    return (
      ctx
        .get(allCvStore.dataAtom)
        .find(
          (cvStore) => ctx.get(ctx.get(cvStore.dataAtom).metadata).id === id
        ) ?? ctx.get(allCvStore.dataAtom)[0]
    )
  }, [ctx, id])
}

export { useCvStore }
