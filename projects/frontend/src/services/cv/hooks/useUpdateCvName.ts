import { useUpdateCvName as useUpdateCvNameOnBackend } from '../patch'
import { useUpdateCvName as useUpdateCvNameInStore } from '../versions'

const useUpdateCvName = () => {
  const updateCvNameOnBackend = useUpdateCvNameOnBackend()
  const updateCvNameInStore = useUpdateCvNameInStore()

  const handleUpdateCvName = (id: string, name: string) => {
    updateCvNameOnBackend(id, name).then(() => {
      updateCvNameInStore(id, name)
    })
  }

  return handleUpdateCvName
}

export default useUpdateCvName
