import { useSkipSignIn } from 'services/auth'
import useManageModal from 'hooks/useManageModal'

const useSignInModal = () => {
  const {
    isOpened: isSignInModalOpened,
    open: handleOpenSignInModal,
    close: handleCloseSignInModal,
  } = useManageModal()
  const { handleSkipSignIn } = useSkipSignIn()

  const handleSkipSignInModal = () => {
    handleSkipSignIn()
    handleCloseSignInModal()
  }

  return {
    isSignInModalOpened,
    handleOpenSignInModal,
    handleSkipSignInModal,
  }
}

export default useSignInModal
