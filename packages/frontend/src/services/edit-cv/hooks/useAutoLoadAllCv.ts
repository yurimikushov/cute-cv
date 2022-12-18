import isEmpty from 'shared/lib/isEmpty'
import useEffectWhen from 'shared/hooks/useEffectWhen'
import { useIsSignedIn } from 'services/auth'
import { useLoadAllCV } from '../load'
import { useInitAllCv } from '../versions'

const useAutoLoadAllCv = () => {
  const { isSignedIn } = useIsSignedIn()

  const loadAllCv = useLoadAllCV()
  const initAllCv = useInitAllCv()

  useEffectWhen(() => {
    loadAllCv().then((allCv) => {
      if (isEmpty(allCv)) {
        return
      }

      initAllCv(allCv)
    })
  }, isSignedIn)
}

export default useAutoLoadAllCv
