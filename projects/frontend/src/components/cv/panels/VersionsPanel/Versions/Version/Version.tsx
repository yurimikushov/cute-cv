import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { useIsSignedIn } from 'services/auth'
import EditCvMetadataModal from 'components/cv/modals/EditCvMetadataModal'
import useUpdateCvMetadataModal from './hooks/useUpdateCvMetadataModal'
import useMakeCopyModal from './hooks/useMakeCopyModal'
import Menu from './Menu'
import VersionProps from './Version.props'

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`

const UpdateCvMetadataMetadata = EditCvMetadataModal
const MakeCvCopyModal = EditCvMetadataModal

const Name = styled.span`
  max-width: 5rem;
  overflow-wrap: break-word;
`

const Version: FC<VersionProps> = ({
  name,
  allowShare,
  disabled,
  onUpdateCvMetadata,
  onMakeCvCopy,
  onDelete,
  ...props
}) => {
  const { t } = useTranslation('translation', { keyPrefix: 'versions' })
  const { isSignedIn } = useIsSignedIn()
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
      <Name>{name}</Name>
      {isSignedIn && (
        <Menu
          disabled={disabled}
          onEditName={handleOpenUpdateCvMetadataModal}
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
