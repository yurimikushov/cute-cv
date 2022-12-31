import isEmpty from 'shared/lib/isEmpty'
import useEffectWhen from 'shared/hooks/useEffectWhen'
import { useAuth } from 'services/auth'
import { useLoadAllCV } from '../load'
import { useInitAllCv } from '../versions'

const useAutoLoadAllCv = () => {
  const { isSignedIn } = useAuth()

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
