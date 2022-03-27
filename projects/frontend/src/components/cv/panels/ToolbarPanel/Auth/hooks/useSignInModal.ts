import useManageModal from 'hooks/useManageModal'

const useSignInModal = (onSkipSighIn: () => void) => {
  const {
    isOpened: isSignInModalOpened,
    open: handleOpenSignInModal,
    close: handleCloseSignInModal,
  } = useManageModal()

  const handleSkipSignInModal = () => {
    onSkipSighIn()
    handleCloseSignInModal()
  }

  return {
    isSignInModalOpened,
    handleOpenSignInModal,
    handleSkipSignInModal,
  }
}

export default useSignInModal
