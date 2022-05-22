import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import EditCvMetadataModal from 'shared/ui/cv/modals/EditCvMetadataModal'
import Button from 'shared/ui/Button'
import colors from 'styles/colors'
import { useVersionsPanel } from '../../VersionsPanelContext'
import useUpdateCvMetadataModal from './hooks/useUpdateCvMetadataModal'
import useMakeCopyModal from './hooks/useMakeCopyModal'
import Menu from './Menu'
import VersionProps from './Version.props'

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const UpdateCvMetadataMetadata = EditCvMetadataModal
const MakeCvCopyModal = EditCvMetadataModal

const Name = styled(Button)<Pick<VersionProps, 'current'>>`
  max-width: 5rem;
  overflow-wrap: break-word;

  ${({ current }) => current && `color: ${colors.black}`}
`

const Version: FC<VersionProps> = ({
  name,
  allowShare,
  current,
  disabled,
  onSelectCv,
  onUpdateCvMetadata,
  onMakeCvCopy,
  onDelete,
  ...props
}) => {
  const { t } = useTranslation('translation', { keyPrefix: 'versions' })
  const { isSignedIn } = useVersionsPanel()
  const {
    isUpdateCvMetadataModalOpened,
    handleOpenUpdateCvMetadataModal,
    handleCloseUpdateCvMetadataModal,
    handleUpdateCvMetadata,
  } = useUpdateCvMetadataModal(onUpdateCvMetadata)
  const {
    isMakeCopyModalOpened,
    handleOpenMakeCopyModal,
    handleCloseMakeCopyModal,
    handleMakeCopy,
  } = useMakeCopyModal(onMakeCvCopy)

  return (
    <Container {...props}>
      <Name appearance='text' current={current} onClick={onSelectCv}>
        {name}
      </Name>
      {isSignedIn && (
        <Menu
          disabled={disabled}
          onEditCvMetadata={handleOpenUpdateCvMetadataModal}
          onMakeCopy={handleOpenMakeCopyModal}
          onDelete={onDelete}
        />
      )}
      {isSignedIn && isUpdateCvMetadataModalOpened && (
        <UpdateCvMetadataMetadata
          title={t('updateCvMetadataModal.title')}
          submitTitle={t('updateCvMetadataModal.save')}
          submitSubmittingTitle={t('updateCvMetadataModal.savingStatus')}
          initialName={name}
          initialAllowShare={allowShare}
          onSubmit={handleUpdateCvMetadata}
          onClose={handleCloseUpdateCvMetadataModal}
        />
      )}
      {isSignedIn && isMakeCopyModalOpened && (
        <MakeCvCopyModal
          title={t('makeCopyModal.title')}
          submitTitle={t('makeCopyModal.makeCopy')}
          onSubmit={handleMakeCopy}
          onClose={handleCloseMakeCopyModal}
        />
      )}
    </Container>
  )
}

export default Version
