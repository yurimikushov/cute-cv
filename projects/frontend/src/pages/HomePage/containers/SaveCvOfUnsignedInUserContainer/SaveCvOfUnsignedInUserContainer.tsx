import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import EditCvMetadataModal from 'components/cv/modals/EditCvMetadataModal'
import useSaveCvOfUnsignedInUserModal from './hooks/useSaveCvOfUnsignedInUserModal'

const SaveCvOfUnsignedInUserModal = EditCvMetadataModal

const SaveCvOfUnsignedInUserContainer: FC = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'versions.saveCvOfUnsignedInUserModal',
  })
  const {
    isCopyUnsignedInCvModalOpened,
    handleCloseCopyUnsignedInCvModal,
    handleSaveCvOfUnsignedInUser,
  } = useSaveCvOfUnsignedInUserModal()

  if (isCopyUnsignedInCvModalOpened) {
    return (
      <SaveCvOfUnsignedInUserModal
        title={t('title')}
        submitTitle={t('save')}
        onSubmit={handleSaveCvOfUnsignedInUser}
        onClose={handleCloseCopyUnsignedInCvModal}
      />
    )
  }

  return null
}

export default SaveCvOfUnsignedInUserContainer
