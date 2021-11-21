import { useEffect, useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import debounce from 'lodash/debounce'
import { save } from 'api/cv'
import { useIsSignedIn } from 'services/auth'
import { useIsCVLoading, useCV, CV } from 'services/cv'
import { selectIsSaved, selectSavedAt } from './selectors'
import { begin, success, fail } from './slice'

const useIsCVSaved = () => {
  const isCVSaved = useSelector(selectIsSaved)
  const savedAt = useSelector(selectSavedAt)

  return {
    isCVSaved,
    savedAt,
  }
}

const AUTO_SAVE_TIMING = 1_000

const useSaveCV = () => {
  const { isSignedIn } = useIsSignedIn()

  const { cv } = useCV()
  const { isCVLoading } = useIsCVLoading()
  const isPrevCVLoadingRef = useRef<boolean>(false)

  const dispatch = useDispatch()

  const debouncedSave = useCallback(
    debounce(
      async (cv: CV, success: () => void, fail: (error: Error) => void) => {
        const either = await save(cv)
        either.mapRight(success).mapLeft(fail)
      },
      AUTO_SAVE_TIMING
    ),
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
      dispatch(begin())

      await debouncedSave(
        cv,
        () => {
          dispatch(success())
        },
        (error) => {
          dispatch(fail({ error }))
        }
      )
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

export { useIsCVSaved, useSaveCV }
