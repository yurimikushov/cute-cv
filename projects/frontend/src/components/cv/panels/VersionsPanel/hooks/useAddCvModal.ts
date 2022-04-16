import { useTranslation } from 'react-i18next'
import useModal from 'hooks/useModal'
import { useWithNotification } from 'components/ui/Notifications'

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
  } = useModal()

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
