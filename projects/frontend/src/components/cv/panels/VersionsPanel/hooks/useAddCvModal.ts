import useManageModal from 'hooks/useManageModal'

const useAddEditCvModal = (
  onAddEmptyCv: (name: string, allowShare: boolean) => void
) => {
  const {
    isOpened: isAddModalOpened,
    open: handleOpenAddModal,
    close: handleCloseAddModal,
  } = useManageModal()

  const handleAddCv = (name: string, allowShare: boolean) => {
    onAddEmptyCv(name, allowShare)
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
