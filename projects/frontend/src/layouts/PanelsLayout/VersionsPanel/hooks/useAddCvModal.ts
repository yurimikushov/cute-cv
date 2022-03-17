import useManageModal from 'hooks/useManageModal'
import { useAddEmptyCv } from 'services/cv'

const useAddEditCvModal = () => {
  const {
    isOpened: isAddModalOpened,
    open: handleOpenAddModal,
    close: handleCloseAddModal,
  } = useManageModal()

  const addEmptyCv = useAddEmptyCv()

  const handleAddCv = (name: string) => {
    addEmptyCv(name)
    handleCloseAddModal()
  }

  return {
    isAddModalOpened,
    handleOpenAddModal,
    handleCloseAddModal,
    handleAddCv,
  }
}

export default useAddEditCvModal
