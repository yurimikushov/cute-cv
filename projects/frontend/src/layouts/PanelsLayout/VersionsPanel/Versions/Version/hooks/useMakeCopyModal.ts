import useManageModal from 'hooks/useManageModal'

const useMakeCopyModal = (
  onMakeCopy: (name: string, allowShare: boolean) => void
) => {
  const {
    isOpened: isMakeCopyModalOpened,
    open: handleOpenMakeCopyModal,
    close: handleCloseMakeCopyModal,
  } = useManageModal()

  const handleMakeCopy = (name: string, allowShare: boolean) => {
    onMakeCopy(name, allowShare)
    handleCloseMakeCopyModal()
  }

  return {
    isMakeCopyModalOpened,
    handleOpenMakeCopyModal,
    handleCloseMakeCopyModal,
    handleMakeCopy,
  }
}

export default useMakeCopyModal
