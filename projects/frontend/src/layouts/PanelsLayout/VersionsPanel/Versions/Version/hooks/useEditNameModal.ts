import useManageModal from 'hooks/useManageModal'

const useEditNameModal = (
  onUpdateCvName: (name: string, allowShare: boolean) => Promise<void>
) => {
  const {
    isOpened: isEditNameModalOpened,
    open: handleOpenEditNameModal,
    close: handleCloseEditNameModal,
  } = useManageModal()

  const handleUpdateCvName = async (name: string, allowShare: boolean) => {
    await onUpdateCvName(name, allowShare)
    handleCloseEditNameModal()
  }

  return {
    isEditNameModalOpened,
    handleOpenEditNameModal,
    handleCloseEditNameModal,
    handleUpdateCvName,
  }
}

export default useEditNameModal
