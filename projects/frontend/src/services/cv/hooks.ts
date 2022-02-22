import { useEffect } from 'react'
import useEffectWhen from 'hooks/useEffectWhen'
import { useIsSignedIn } from 'services/auth'
import { useLoadAllCV, useLoadCV } from './load'
import { useCurrentCvMetadata } from './versions'

const useAutoLoadAllCv = () => {
  const { isSignedIn } = useIsSignedIn()

  const loadAllCv = useLoadAllCV()

  useEffectWhen(loadAllCv, isSignedIn)
}

const useAutoLoadCurrentCv = () => {
  const { isSignedIn } = useIsSignedIn()
  const { id } = useCurrentCvMetadata()
  const loadCv = useLoadCV()

  useEffect(() => {
    if (!isSignedIn) {
      return
    }

    loadCv(id)
  }, [isSignedIn, id])
}

export { useAutoLoadAllCv, useAutoLoadCurrentCv }
