import useModal from 'shared/hooks/useModal'

const useMakeCopyModal = (
  onMakeCopy: (name: string, allowShare: boolean) => void
) => {
  const {
    isOpened: isMakeCopyModalOpened,
    open: handleOpenMakeCopyModal,
    close: handleCloseMakeCopyModal,
  } = useModal()

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
