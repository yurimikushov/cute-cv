import { useLoadCV } from './load'
import { useSelectCv } from './versions'

const useSelectAndLoadCv = () => {
  const selectCv = useSelectCv()
  const loadCv = useLoadCV()

  const handleSelectAndLoadCv = (id: string) => {
    selectCv(id)
    loadCv(id)
  }

  return handleSelectAndLoadCv
}

export { useSelectAndLoadCv }
