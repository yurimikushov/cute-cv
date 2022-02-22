import { useIsSignedIn } from 'services/auth'
import { useLoadCV } from './load'
import { useSelectCv } from './versions'

const useSelectAndLoadCv = () => {
  const { isSignedIn } = useIsSignedIn()
  const selectCv = useSelectCv()
  const loadCv = useLoadCV()

  const handleSelectAndLoadCv = (id: string) => {
    selectCv(id)

    if (isSignedIn) {
      loadCv(id)
    }
  }

  return handleSelectAndLoadCv
}

export { useSelectAndLoadCv }
