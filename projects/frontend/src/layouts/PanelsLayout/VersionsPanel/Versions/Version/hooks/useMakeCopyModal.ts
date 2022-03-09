import useManageModal from 'hooks/useManageModal'

const useMakeCopyModal = (onMakeCopy: (name: string) => void) => {
  const {
    isOpened: isMakeCopyModalOpened,
    open: handleOpenMakeCopyModal,
    close: handleCloseMakeCopyModal,
  } = useManageModal()

  const handleMakeCopy = (name: string) => {
    onMakeCopy(name)
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
