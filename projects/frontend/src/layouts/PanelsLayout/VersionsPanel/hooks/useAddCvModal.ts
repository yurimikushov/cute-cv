import useManageModal from 'hooks/useManageModal'

const useAddEditCvModal = (onAddCv: (name: string) => void) => {
  const {
    isOpened: isAddModalOpened,
    open: handleOpenAddModal,
    close: handleCloseAddModal,
  } = useManageModal()

  const handleAddCv = (name: string) => {
    onAddCv(name)
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
