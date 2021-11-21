import { useLoadCV } from './load'
import { useSaveCV } from './save'

const useConnectCV = () => {
  useLoadCV()
  useSaveCV()
}

export { useConnectCV }
