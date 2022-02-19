import { useLoadAllCV, useLoadCV } from './load'
import { useSaveCV } from './save'

const useConnectCV = () => {
  useLoadAllCV()
  useLoadCV()
  useSaveCV()
}

export { useConnectCV }
