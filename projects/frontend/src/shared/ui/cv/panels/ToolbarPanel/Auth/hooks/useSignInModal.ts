import useModal from 'hooks/useModal'

const useSignInModal = (onSkipSighIn: () => void) => {
  const {
    isOpened: isSignInModalOpened,
    open: handleOpenSignInModal,
    close: handleCloseSignInModal,
  } = useModal()

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
