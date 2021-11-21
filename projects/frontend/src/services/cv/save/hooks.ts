import { useEffect, useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import debounce from 'lodash/debounce'
import { save } from 'api/cv'
import { useIsSignedIn } from 'services/auth'
import { useIsCVLoading, useCV, CV } from 'services/cv'
import { selectIsSaved, selectSavedAt } from './selectors'
import { markAsSaved, markAsUnsaved } from './slice'

const useIsCVSaving = () => {
  const isCVSaved = useSelector(selectIsSaved)
  const savedAt = useSelector(selectSavedAt)

  const dispatch = useDispatch()

  const handleMarkAsSaved = useCallback(() => {
    dispatch(markAsSaved())
  }, [])

  const handleMarkAsUnsaved = useCallback(() => {
    dispatch(markAsUnsaved())
  }, [])

  return {
    isCVSaved,
    savedAt,
    handleMarkAsSaved,
    handleMarkAsUnsaved,
  }
}

const AUTO_SAVE_TIMING = 1_000

const useSaveCV = () => {
  const { isSignedIn } = useIsSignedIn()

  const { cv } = useCV()
  const { isCVLoading } = useIsCVLoading()
  const { handleMarkAsSaved, handleMarkAsUnsaved } = useIsCVSaving()
  const isPrevCVLoadingRef = useRef<boolean>(false)

  const debouncedSave = useCallback(
    debounce(async (cv: CV, cb: () => void) => {
      await save(cv)
      cb()
    }, AUTO_SAVE_TIMING),
    []
  )

  useEffect(() => {
    if (!isSignedIn) {
      return
    }

    if (isPrevCVLoadingRef.current || isCVLoading) {
      isPrevCVLoadingRef.current = isCVLoading
      return
    }

    const handleSave = async () => {
      handleMarkAsUnsaved()

      await debouncedSave(cv, () => {
        handleMarkAsSaved()
      })
    }

    handleSave()
  }, [isCVLoading, cv])

  useEffect(() => {
    const handleSave = async () => {
      await save(cv)
    }

    window.addEventListener('beforeunload', handleSave)

    return () => {
      window.removeEventListener('beforeunload', handleSave)
    }
  }, [cv])
}

export { useIsCVSaving, useSaveCV }
