import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useIsSignedIn } from 'services/auth'
import {
  useCvCount,
  useCurrentCvMetadata,
  useAddEmptyCv,
  useIsCvSaving,
  useIsCvDeleting,
  CV_VERSIONS_MAX_COUNT,
} from 'services/cv'
import useAddCvModal from './hooks/useAddCvModal'
import useSaveCvOfUnsignedInUserModal from './hooks/useSaveCvOfUnsignedInUserModal'
import VersionsPanel from './VersionsPanel'
import EditCvModal from './EditCvModal'

const AddCvModal = EditCvModal
const SaveCvOfUnsignedInUserModal = EditCvModal

// eslint-disable-next-line max-statements
const VersionsPanelContainer: FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'versions' })
  const cvCount = useCvCount()
  const { isNew, isSaved } = useCurrentCvMetadata()
  const addEmptyCv = useAddEmptyCv()
  const { isCvSaving } = useIsCvSaving()
  const { isCvDeleting } = useIsCvDeleting()
  const { isSignedIn } = useIsSignedIn()
  const {
    isAddModalOpened,
    handleOpenAddModal,
    handleCloseAddModal,
    handleAddCv,
  } = useAddCvModal(addEmptyCv)
  const {
    isCopyUnsignedInCvModalOpened,
    handleCloseCopyUnsignedInCvModal,
    handleSaveCvOfUnsignedInUser,
  } = useSaveCvOfUnsignedInUserModal()

  const shouldDisableActiveElements =
    (!isNew && !isSaved) || isCvSaving || isCvDeleting
  const shouldDisplayAddButton = isSignedIn && cvCount < CV_VERSIONS_MAX_COUNT

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
