import { useMemo } from 'react'
import { getCvStore } from '../get-cv-store'

const useCvStore = (publicId: string | null, id: string) => {
  return useMemo(() => {
    return getCvStore(publicId, id)
  }, [publicId, id])
}

export { useCvStore }
