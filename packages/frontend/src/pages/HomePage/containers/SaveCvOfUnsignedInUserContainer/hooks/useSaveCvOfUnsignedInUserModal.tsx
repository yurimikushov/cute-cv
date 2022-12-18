import { useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import useModal from 'shared/hooks/useModal'
import { useIsSignedIn } from 'services/auth'
import { useSaveCvOfUnsignedInUser } from 'services/edit-cv'
import { useNotification, useWithNotification } from 'shared/ui/Notifications'
import CvOfUnsignedInUserExistsNotification from 'shared/ui/cv/notifications/CvOfUnsignedInUserExistsNotification'

// eslint-disable-next-line max-statements
const useSaveCvOfUnsignedInUserModal = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'versions' })
  const {
    isOpened: isCopyUnsignedInCvModalOpened,
    open: handleOpenCopyUnsignedInCvModal,
    close: handleCloseCopyUnsignedInCvModal,
  } = useModal()
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

    if (!id) {
      return
    }

    close(id)
  }

  const handleSaveCvOfUnsignedInUser = useWithNotification(
    async (name: string, allowShare: boolean) => {
      await copy(name, allowShare)
      handleCloseCopyUnsignedInCvModal()
      closeNotification()
    },
    {
      successContent: t('notifications.saveCvOfUnsignedInUserResult.success'),
      errorContent: t('notifications.saveCvOfUnsignedInUserResult.error'),
    }
  )

  return {
    isCopyUnsignedInCvModalOpened,
    handleOpenCopyUnsignedInCvModal,
    handleCloseCopyUnsignedInCvModal,
    handleSaveCvOfUnsignedInUser,
  }
}

export default useSaveCvOfUnsignedInUserModal
