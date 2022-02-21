import { useLoadAllCV, useLoadCV } from './load'

const useConnectCV = () => {
  useLoadAllCV()
  useLoadCV()
}

export { useConnectCV }
