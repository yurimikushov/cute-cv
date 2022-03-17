import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { useIsSignedIn } from 'services/auth'
import {
  useCvCount,
  useCurrentCvMetadata,
  useAddEmptyCv,
  useIsCvSaving,
  useIsCvDeleting,
  CV_VERSIONS_MAX_COUNT,
} from 'services/cv'
import Card from 'components/Card'
import Divider from 'components/Divider'
import Button from 'components/Button'
import { panelMixin } from '../mixins'
import useAddCvModal from './hooks/useAddCvModal'
import useSaveCvOfUnsignedInUserModal from './hooks/useSaveCvOfUnsignedInUserModal'
import Versions from './Versions'
import EditCvModal from './EditCvModal'
import VersionsPanelProps from './VersionsPanel.props'

const Container = styled(Card)`
  ${panelMixin}
`

// eslint-disable-next-line max-statements
const VersionsPanel: FC<VersionsPanelProps> = (props) => {
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
    <Container {...props}>
      <Versions />
      {shouldDisplayAddButton && (
        <>
          <Divider />
          <Button
            appearance='text'
            withoutPaddings
            disabled={shouldDisableActiveElements}
            onClick={handleOpenAddModal}
          >
            {t('add')}
          </Button>
        </>
      )}
      {isAddModalOpened && (
        <EditCvModal
          title={t('addModal.title')}
          submitTitle={t('addModal.add')}
          onSubmit={handleAddCv}
          onClose={handleCloseAddModal}
        />
      )}
      {isCopyUnsignedInCvModalOpened && (
        <EditCvModal
          title='Сохранить резюме'
          submitTitle='Сохранить'
          onSubmit={handleSaveCvOfUnsignedInUser}
          onClose={handleCloseCopyUnsignedInCvModal}
        />
      )}
    </Container>
  )
}

export default VersionsPanel
