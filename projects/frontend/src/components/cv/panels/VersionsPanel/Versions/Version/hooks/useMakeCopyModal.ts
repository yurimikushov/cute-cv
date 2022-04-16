import { useTranslation } from 'react-i18next'
import useManageModal from 'hooks/useManageModal'
import { useWithNotification } from 'components/ui/Notifications'

const useMakeCopyModal = (
  onMakeCopy: (name: string, allowShare: boolean) => void
) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'versions.makeCopyModal',
  })
  const {
    isOpened: isMakeCopyModalOpened,
    open: handleOpenMakeCopyModal,
    close: handleCloseMakeCopyModal,
  } = useManageModal()

  const handleMakeCopy = useWithNotification(
    (name: string, allowShare: boolean) => {
      onMakeCopy(name, allowShare)
      handleCloseMakeCopyModal()
    },
    {
      successContent: t('notifications.copyResult.success'),
      errorContent: t('notifications.copyResult.error'),
    }
  )

  return {
    isMakeCopyModalOpened,
    handleOpenMakeCopyModal,
    handleCloseMakeCopyModal,
    handleMakeCopy,
  }
}

export default useMakeCopyModal
