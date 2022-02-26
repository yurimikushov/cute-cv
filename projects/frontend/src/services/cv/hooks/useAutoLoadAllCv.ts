import useEffectWhen from 'hooks/useEffectWhen'
import { useIsSignedIn } from 'services/auth'
import { useLoadAllCV } from '../load'

const useAutoLoadAllCv = () => {
  const { isSignedIn } = useIsSignedIn()

  const loadAllCv = useLoadAllCV()

  useEffectWhen(loadAllCv, isSignedIn)
}

export default useAutoLoadAllCv
