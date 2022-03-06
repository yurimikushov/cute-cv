import useManageModal from 'hooks/useManageModal'

const useEditNameModal = (onUpdateCvName: (name: string) => Promise<void>) => {
  const {
    isOpened: isEditNameModalOpened,
    open: handleOpenEditNameModal,
    close: handleCloseEditNameModal,
  } = useManageModal()

  const handleUpdateCvName = async (name: string) => {
    await onUpdateCvName(name)
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
