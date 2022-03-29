import useManageModal from 'hooks/useManageModal'

const useUpdateCvMetadataModal = (
  onUpdateCvMetadata: (name: string, allowShare: boolean) => Promise<void>
) => {
  const {
    isOpened: isUpdateCvMetadataModalOpened,
    open: handleOpenUpdateCvMetadataModal,
    close: handleCloseUpdateCvMetadataModal,
  } = useManageModal()

  const handleUpdateCvMetadata = async (name: string, allowShare: boolean) => {
    await onUpdateCvMetadata(name, allowShare)
    handleCloseUpdateCvMetadataModal()
  }

  return {
    isUpdateCvMetadataModalOpened,
    handleOpenUpdateCvMetadataModal,
    handleCloseUpdateCvMetadataModal,
    handleUpdateCvMetadata,
  }
}

export default useUpdateCvMetadataModal
