import { useEffect } from 'react'
import { useStore } from '@nanostores/react'
import cvApi from 'api/cv'
import {
  isLoadingAtom,
  cvAtom,
  loadingErrorAtom,
  startLoading,
  loadingSuccess,
  loadingFail,
} from '../store'

const useSharableCv = (id: string) => {
  const isLoading = useStore(isLoadingAtom)
  const cv = useStore(cvAtom)
  const error = useStore(loadingErrorAtom)

  useEffect(() => {
    ;(async () => {
      startLoading()

      try {
        loadingSuccess(await cvApi.loadSharable(id))
      } catch (err) {
        loadingFail(err as Error)
      }
    })()
  }, [id])

  return {
    isLoading,
    cv,
    error,
  }
}

export default useSharableCv
