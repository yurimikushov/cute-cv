import useModal from 'shared/hooks/useModal'

const useAddEditCvModal = (
  onAddEmptyCv: (name: string, allowShare: boolean) => Promise<{ id: string }>,
  onSelectCvId: (id: string) => void
) => {
  const {
    isOpened: isAddModalOpened,
    open: handleOpenAddModal,
    close: handleCloseAddModal,
  } = useModal()

  const handleAddCv = async (name: string, allowShare: boolean) => {
    const { id } = await onAddEmptyCv(name, allowShare)
    onSelectCvId(id)
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
