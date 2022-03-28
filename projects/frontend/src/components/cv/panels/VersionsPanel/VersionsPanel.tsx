import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import Card from 'components/ui/Card'
import Divider from 'components/ui/Divider'
import Button from 'components/ui/Button'
import EditCvMetadataModal from 'components/cv/modals/EditCvMetadataModal'
import { panelMixin } from '../mixins'
import useAddEditCvModal from './hooks/useAddCvModal'
import useSaveCvOfUnsignedInUserModal from './hooks/useSaveCvOfUnsignedInUserModal'
import VersionsPanelContext from './VersionsPanelContext'
import Versions from './Versions'
import VersionsPanelProps from './VersionsPanel.props'

const Container = styled(Card)`
  ${panelMixin}
`

const AddCvModal = EditCvMetadataModal
const SaveCvOfUnsignedInUserModal = EditCvMetadataModal

const VersionsPanel: FC<VersionsPanelProps> = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'versions' })
  const { disableActiveElements, displayAddButton, onAddEmptyCv, ...rest } =
    props

  const {
    isAddModalOpened,
    handleOpenAddModal,
    handleCloseAddModal,
    handleAddCv,
  } = useAddEditCvModal(onAddEmptyCv)
  const {
    isCopyUnsignedInCvModalOpened,
    handleCloseCopyUnsignedInCvModal,
    handleSaveCvOfUnsignedInUser,
  } = useSaveCvOfUnsignedInUserModal()

  return (
    <VersionsPanelContext.Provider value={props}>
      <Container {...rest}>
        <Versions />
        {displayAddButton && (
          <>
            <Divider />
            <Button
              appearance='text'
              withoutPaddings
              disabled={disableActiveElements}
              onClick={handleOpenAddModal}
            >
              {t('add')}
            </Button>
          </>
        )}
      </Container>
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
    </VersionsPanelContext.Provider>
  )
}

export default VersionsPanel
