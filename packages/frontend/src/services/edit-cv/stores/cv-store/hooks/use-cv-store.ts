import { useMemo } from 'react'
import { getCvStore } from '../get-cv-store'

const useCvStore = (id: string) => {
  return useMemo(() => {
    return getCvStore(id)
  }, [id])
}

export { useCvStore }
