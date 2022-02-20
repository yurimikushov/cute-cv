import { useEffect, useCallback, useRef } from 'react'
import { useDispatch } from 'react-redux'
import debounce from 'lodash/debounce'
import { useIsSignedIn } from 'services/auth'
import { useCvContent, useIsCVLoading, useCvMetadata, CV } from 'services/cv'
import { save } from './thunks'

const AUTO_SAVE_TIMING = 1_000

const useSaveCV = () => {
  const { isSignedIn } = useIsSignedIn()

  const { cv } = useCvContent()
  const { isCVLoading } = useIsCVLoading()
  const isPrevCVLoadingRef = useRef<boolean>(false)
  const { markAsUnsaved } = useCvMetadata()

  const dispatch = useDispatch()

  const debouncedSave = useCallback(
    debounce((cv: CV) => {
      dispatch(save(cv))
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

    markAsUnsaved()
    debouncedSave(cv)
  }, [isCVLoading, cv])
}

export { useSaveCV }
