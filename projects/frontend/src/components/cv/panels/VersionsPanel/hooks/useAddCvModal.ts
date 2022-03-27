import useManageModal from 'hooks/useManageModal'
import { useAddEmptyCv } from 'services/edit-cv'

const useAddEditCvModal = () => {
  const {
    isOpened: isAddModalOpened,
    open: handleOpenAddModal,
    close: handleCloseAddModal,
  } = useManageModal()

  const addEmptyCv = useAddEmptyCv()

  const handleAddCv = (name: string, allowShare: boolean) => {
    addEmptyCv(name, allowShare)
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
