/* eslint-disable max-statements */
import { useEffect, useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import debounce from 'lodash/debounce'
import { save } from 'api/cv'
import { useLoading } from 'services/app'
import { useCV, CV } from 'services/cv'
import { selectIsSaved, selectSavedAt } from './selectors'
import { markAsSaved, markAsUnsaved } from './slice'

const useSaving = () => {
  const isSaved = useSelector(selectIsSaved)
  const savedAt = useSelector(selectSavedAt)

  const dispatch = useDispatch()

  const handleMarkAsSaved = useCallback(() => {
    dispatch(markAsSaved())
  }, [])

  const handleMarkAsUnsaved = useCallback(() => {
    dispatch(markAsUnsaved())
  }, [])

  return {
    isSaved,
    savedAt,
    handleMarkAsSaved,
    handleMarkAsUnsaved,
  }
}

const AUTO_SAVE_TIMING = 1_000

const useSaveCV = () => {
  const { cv } = useCV()
  const { isLoading } = useLoading()
  const { handleMarkAsSaved, handleMarkAsUnsaved } = useSaving()
  const isPrevLoadingRef = useRef<boolean>(false)

  const debouncedSave = useCallback(
    debounce(async (cv: CV, cb: () => void) => {
      await save(cv)
      cb()
    }, AUTO_SAVE_TIMING),
    []
  )

  useEffect(() => {
    if (isPrevLoadingRef.current || isLoading) {
      isPrevLoadingRef.current = isLoading
      return
    }

    const handleSave = async () => {
      handleMarkAsUnsaved()

      await debouncedSave(cv, () => {
        handleMarkAsSaved()
      })
    }

    handleSave()
  }, [isLoading, cv])

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

export { useSaving, useSaveCV }
