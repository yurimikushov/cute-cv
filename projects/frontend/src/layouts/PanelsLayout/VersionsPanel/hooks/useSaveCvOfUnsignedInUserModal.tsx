import { useRef, useEffect } from 'react'
import isNull from 'lodash/isNull'
import useManageModal from 'hooks/useManageModal'
import { useIsSignedIn } from 'services/auth'
import { useSaveCvOfUnsignedInUser } from 'services/cv'
import { useNotification } from 'components/ui/Notifications'
import ThereIsCvOfUnsignedInUserNotification from './ThereIsCvOfUnsignedInUserNotification'

const useSaveCvOfUnsignedInUserModal = () => {
  const {
    isOpened: isCopyUnsignedInCvModalOpened,
    open: handleOpenCopyUnsignedInCvModal,
    close: handleCloseCopyUnsignedInCvModal,
  } = useManageModal()
  const { isSignedIn } = useIsSignedIn()
  const { show: notify, hide } = useNotification()
  const { isExists, copy } = useSaveCvOfUnsignedInUser()
  const notificationIdRef = useRef<string | null>(null)

  useEffect(() => {
    if (!isSignedIn) {
      hideNotification()
      return
    }

    if (!isExists) {
      return
    }

    showNotification()
  }, [isSignedIn, isExists])

  const showNotification = () => {
    notificationIdRef.current = notify(
      <ThereIsCvOfUnsignedInUserNotification
        onSave={handleOpenCopyUnsignedInCvModal}
      />
    )
  }

  const hideNotification = () => {
    const { current: id } = notificationIdRef

    if (isNull(id)) {
      return
    }

    hide(id)
  }

  const handleSaveCvOfUnsignedInUser = async (name: string) => {
    await copy(name)
    handleCloseCopyUnsignedInCvModal()
    hideNotification()
  }

  return {
    isCopyUnsignedInCvModalOpened,
    handleOpenCopyUnsignedInCvModal,
    handleCloseCopyUnsignedInCvModal,
    handleSaveCvOfUnsignedInUser,
  }
}

export default useSaveCvOfUnsignedInUserModal
