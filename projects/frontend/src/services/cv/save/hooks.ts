import { useEffect, useCallback, useRef } from 'react'
import { useDispatch } from 'react-redux'
import debounce from 'lodash/debounce'
import { save } from 'api/cv'
import { useIsSignedIn } from 'services/auth'
import { useCV, useIsCVLoading, useMetadata, MetadataT, CV } from 'services/cv'
import { begin, success, fail } from './slice'

const AUTO_SAVE_TIMING = 1_000

const useSaveCV = () => {
  const { isSignedIn } = useIsSignedIn()

  const { cv } = useCV()
  const { isCVLoading } = useIsCVLoading()
  const isPrevCVLoadingRef = useRef<boolean>(false)
  const { handleMarkAsSaved, handleMarkAsUnsaved } = useMetadata()

  const dispatch = useDispatch()

  const debouncedSave = useCallback(
    debounce(
      async (
        cv: CV,
        success: (metadata: MetadataT) => void,
        fail: (error: Error) => void
      ) => {
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
      handleMarkAsUnsaved()

      await debouncedSave(
        cv,
        ({ savedAt }) => {
          handleMarkAsSaved({ savedAt })
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

export { useSaveCV }
