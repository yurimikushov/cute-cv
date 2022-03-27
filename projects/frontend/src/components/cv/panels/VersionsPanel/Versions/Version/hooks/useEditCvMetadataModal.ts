import useManageModal from 'hooks/useManageModal'

const useEditCvMetadataModal = (
  onUpdateCvMetadata: (name: string, allowShare: boolean) => Promise<void>
) => {
  const {
    isOpened: isEditNameModalOpened,
    open: handleOpenEditNameModal,
    close: handleCloseEditNameModal,
  } = useManageModal()

  const handleUpdateCvMetadata = async (name: string, allowShare: boolean) => {
    await onUpdateCvMetadata(name, allowShare)
    handleCloseEditNameModal()
  }

  return {
    isEditNameModalOpened,
    handleOpenEditNameModal,
    handleCloseEditNameModal,
    handleUpdateCvMetadata,
  }
}

export default useEditCvMetadataModal
