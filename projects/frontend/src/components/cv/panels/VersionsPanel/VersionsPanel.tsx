import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import Card from 'components/ui/Card'
import Divider from 'components/ui/Divider'
import Button from 'components/ui/Button'
import EditCvMetadataModal from 'components/cv/modals/EditCvMetadataModal'
import { panelMixin } from '../mixins'
import useAddEditCvModal from './hooks/useAddCvModal'
import VersionsPanelContext from './VersionsPanelContext'
import Versions from './Versions'
import VersionsPanelProps from './VersionsPanel.props'

const Container = styled(Card)`
  ${panelMixin}
`

const AddCvModal = EditCvMetadataModal

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
    </VersionsPanelContext.Provider>
  )
}

export default VersionsPanel
