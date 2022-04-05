import { useRef, useEffect } from 'react'
import isNull from 'lodash/isNull'
import useManageModal from 'hooks/useManageModal'
import { useIsSignedIn } from 'services/auth'
import { useSaveCvOfUnsignedInUser } from 'services/edit-cv'
import { useNotification } from 'components/ui/Notifications'
import CvOfUnsignedInUserExistsNotification from 'components/cv/notifications/CvOfUnsignedInUserExistsNotification'

const useSaveCvOfUnsignedInUserModal = () => {
  const {
    isOpened: isCopyUnsignedInCvModalOpened,
    open: handleOpenCopyUnsignedInCvModal,
    close: handleCloseCopyUnsignedInCvModal,
  } = useManageModal()
  const { isSignedIn } = useIsSignedIn()
  const { open, close } = useNotification()
  const { isExists, copy } = useSaveCvOfUnsignedInUser()
  const notificationIdRef = useRef<string | null>(null)

  useEffect(() => {
    if (!isSignedIn) {
      closeNotification()
      return
    }

    if (!isExists) {
      return
    }

    showNotification()
  }, [isSignedIn, isExists])

  const showNotification = () => {
    notificationIdRef.current = open(
      <CvOfUnsignedInUserExistsNotification
        onSave={handleOpenCopyUnsignedInCvModal}
      />
    )
  }

  const closeNotification = () => {
    const { current: id } = notificationIdRef

    if (isNull(id)) {
      return
    }

    close(id)
  }

  const handleSaveCvOfUnsignedInUser = async (
    name: string,
    allowShare: boolean
  ) => {
    await copy(name, allowShare)
    handleCloseCopyUnsignedInCvModal()
    closeNotification()
  }

  return {
    isCopyUnsignedInCvModalOpened,
    handleOpenCopyUnsignedInCvModal,
    handleCloseCopyUnsignedInCvModal,
    handleSaveCvOfUnsignedInUser,
  }
}

export default useSaveCvOfUnsignedInUserModal
