import { useTranslation } from 'react-i18next'
import { useWithNotification } from 'components/ui/Notifications'
import useManageModal from 'hooks/useManageModal'

const useAddEditCvModal = (
  onAddEmptyCv: (name: string, allowShare: boolean) => void
) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'versions.addModal',
  })
  const {
    isOpened: isAddModalOpened,
    open: handleOpenAddModal,
    close: handleCloseAddModal,
  } = useManageModal()

  const handleAddCv = useWithNotification(
    (name: string, allowShare: boolean) => {
      onAddEmptyCv(name, allowShare)
      handleCloseAddModal()
    },
    {
      successContent: t('notifications.addResult.success'),
      errorContent: t('notifications.addResult.error'),
    }
  )

  return {
    isAddModalOpened,
    handleOpenAddModal,
    handleCloseAddModal,
    handleAddCv,
  }
}

export default useAddEditCvModal
