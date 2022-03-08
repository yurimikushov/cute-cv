import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { useIsSignedIn } from 'services/auth'
import {
  useCvCount,
  useCurrentCvMetadata,
  useAddCv,
  useIsCvSaving,
  useIsCvDeleting,
  CV_VERSIONS_MAX_COUNT,
} from 'services/cv'
import Card from 'components/Card'
import Divider from 'components/Divider'
import Button from 'components/Button'
import { panelMixin } from '../mixins'
import useAddCvModal from './hooks/useAddCvModal'
import Versions from './Versions'
import AddCvModal from './AddCvModal'
import VersionsPanelProps from './VersionsPanel.props'

const Container = styled(Card)`
  ${panelMixin}
`

// eslint-disable-next-line max-statements
const VersionsPanel: FC<VersionsPanelProps> = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'versions' })
  const cvCount = useCvCount()
  const { isNew, isSaved } = useCurrentCvMetadata()
  const addCv = useAddCv()
  const { isCvSaving } = useIsCvSaving()
  const { isCvDeleting } = useIsCvDeleting()
  const { isSignedIn } = useIsSignedIn()
  const {
    isAddModalOpened,
    handleOpenAddModal,
    handleCloseAddModal,
    handleAddCv,
  } = useAddCvModal(addCv)

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
        <AddCvModal onAdd={handleAddCv} onClose={handleCloseAddModal} />
      )}
    </Container>
  )
}

export default VersionsPanel
