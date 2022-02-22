import { useLoadAllCV, useLoadCV } from './load'
import { useSelectCv } from './versions'

const useConnectCV = () => {
  useLoadAllCV()
}

const useSelectAndLoadCv = () => {
  const selectCv = useSelectCv()
  const loadCv = useLoadCV()

  const handleSelectAndLoadCv = (id: string) => {
    selectCv(id)
    loadCv(id)
  }

  return handleSelectAndLoadCv
}

export { useConnectCV, useSelectAndLoadCv }
