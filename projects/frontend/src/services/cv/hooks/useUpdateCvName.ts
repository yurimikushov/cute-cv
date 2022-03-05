import { useUpdateCvName as useUpdateCvNameOnBackend } from '../patch'
import { useUpdateCvName as useUpdateCvNameInStore } from '../versions'

const useUpdateCvName = () => {
  const updateCvNameOnBackend = useUpdateCvNameOnBackend()
  const updateCvNameInStore = useUpdateCvNameInStore()

  const handleUpdateCvName = async (id: string, name: string) => {
    await updateCvNameOnBackend(id, name).then(() => {
      updateCvNameInStore(id, name)
    })
  }

  return handleUpdateCvName
}

export default useUpdateCvName
