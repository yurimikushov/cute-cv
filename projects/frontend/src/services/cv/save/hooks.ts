import { useEffect, useCallback, useRef } from 'react'
import { useDispatch } from 'react-redux'
import debounce from 'lodash/debounce'
import { useIsSignedIn } from 'services/auth'
import { useCvContent, useIsCVLoading, useCvMetadata, CV } from 'services/cv'
import { save } from './thunks'

const AUTO_SAVE_TIMING = 1_000

const useSaveCV = () => {
  const { isSignedIn } = useIsSignedIn()

  const { id, name, markAsUnsaved } = useCvMetadata()
  const { cv } = useCvContent()
  const { isCVLoading } = useIsCVLoading()
  const isPrevCVLoadingRef = useRef<boolean>(false)
  const metadataRef = useRef<{ id: string; name: string }>({ id, name })

  const dispatch = useDispatch()

  const debouncedSave = useCallback(
    debounce((id: string, name: string, cv: CV) => {
      dispatch(save({ id, name, cv }))
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

    const {
      current: { id, name },
    } = metadataRef

    markAsUnsaved()
    debouncedSave(id, name, cv)
  }, [isCVLoading, cv])
}

export { useSaveCV }
