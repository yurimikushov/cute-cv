import { useTranslation } from 'react-i18next'
import useManageModal from 'hooks/useManageModal'
import { useWithNotification } from 'components/ui/Notifications'

const useUpdateCvMetadataModal = (
  onUpdateCvMetadata: (name: string, allowShare: boolean) => Promise<void>
) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'versions.updateCvMetadataModal',
  })
  const {
    isOpened: isUpdateCvMetadataModalOpened,
    open: handleOpenUpdateCvMetadataModal,
    close: handleCloseUpdateCvMetadataModal,
  } = useManageModal()

  const handleUpdateCvMetadata = useWithNotification(
    async (name: string, allowShare: boolean) => {
      await onUpdateCvMetadata(name, allowShare)
      handleCloseUpdateCvMetadataModal()
    },
    {
      successContent: t('notifications.saveResult.success'),
      errorContent: t('notifications.saveResult.error'),
    }
  )

  return {
    isUpdateCvMetadataModalOpened,
    handleOpenUpdateCvMetadataModal,
    handleCloseUpdateCvMetadataModal,
    handleUpdateCvMetadata,
  }
}

export default useUpdateCvMetadataModal
