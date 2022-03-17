import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import useAddCvModal from './hooks/useAddCvModal'
import useSaveCvOfUnsignedInUserModal from './hooks/useSaveCvOfUnsignedInUserModal'
import useShouldDisplayAddButton from './hooks/useShouldDisplayAddButton'
import useShouldDisableActiveElements from './hooks/useShouldDisableActiveElements'
import VersionsPanel from './VersionsPanel'
import EditCvModal from './EditCvModal'

const AddCvModal = EditCvModal
const SaveCvOfUnsignedInUserModal = EditCvModal

const VersionsPanelContainer: FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'versions' })
  const {
    isAddModalOpened,
    handleOpenAddModal,
    handleCloseAddModal,
    handleAddCv,
  } = useAddCvModal()
  const {
    isCopyUnsignedInCvModalOpened,
    handleCloseCopyUnsignedInCvModal,
    handleSaveCvOfUnsignedInUser,
  } = useSaveCvOfUnsignedInUserModal()

  const shouldDisplayAddButton = useShouldDisplayAddButton()
  const shouldDisableActiveElements = useShouldDisableActiveElements()

  return (
    <>
      <VersionsPanel
        disableActiveElements={shouldDisableActiveElements}
        displayAddButton={shouldDisplayAddButton}
        onAdd={handleOpenAddModal}
      />
      {isAddModalOpened && (
        <AddCvModal
          title={t('addModal.title')}
          submitTitle={t('addModal.add')}
          onSubmit={handleAddCv}
          onClose={handleCloseAddModal}
        />
      )}
      {isCopyUnsignedInCvModalOpened && (
        <SaveCvOfUnsignedInUserModal
          title={t('saveCvOfUnsignedInUserModal.title')}
          submitTitle={t('saveCvOfUnsignedInUserModal.save')}
          onSubmit={handleSaveCvOfUnsignedInUser}
          onClose={handleCloseCopyUnsignedInCvModal}
        />
      )}
    </>
  )
}

export default VersionsPanelContainer
