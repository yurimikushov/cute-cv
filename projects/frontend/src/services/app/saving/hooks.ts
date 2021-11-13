/* eslint-disable max-statements */
import { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import debounce from 'lodash/debounce'
import { save } from 'api/cv'
import { useLoading } from 'services/app'
import { useCV, CV } from 'services/cv'
import { selectIsSaved, selectSavedAt } from './selectors'
import { setSaved, setUnsaved } from './slice'

const useSaving = () => {
  const isSaved = useSelector(selectIsSaved)
  const savedAt = useSelector(selectSavedAt)

  const dispatch = useDispatch()

  const handleSetSaved = useCallback(() => {
    dispatch(setSaved())
  }, [])

  const handleSetUnsaved = useCallback(() => {
    dispatch(setUnsaved())
  }, [])

  return {
    isSaved,
    savedAt,
    handleSetSaved,
    handleSetUnsaved,
  }
}

const AUTO_SAVE_TIMING = 1000

const useSaveCV = () => {
  const { cv } = useCV()
  const { isLoading } = useLoading()
  const { handleSetSaved, handleSetUnsaved } = useSaving()

  const debouncedSave = useCallback(
    debounce(async (cv: CV, cb: () => void) => {
      await save(cv)
      cb()
    }, AUTO_SAVE_TIMING),
    []
  )

  useEffect(() => {
    if (isLoading) {
      return
    }

    const handleSave = async () => {
      handleSetUnsaved()

      await debouncedSave(cv, () => {
        handleSetSaved()
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
