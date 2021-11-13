/* eslint-disable max-statements */
import { useEffect, useCallback } from 'react'
import { useSelector } from 'react-redux'
import debounce from 'lodash/debounce'
import { save } from 'api/cv'
import { useLoading, useSaving } from 'services/app'
import { selectCV } from './selector'
import { CV } from './model'

const AUTO_SAVE_TIMING = 1000

const useSaveCV = () => {
  const cv = useSelector(selectCV)
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

export { useSaveCV }
