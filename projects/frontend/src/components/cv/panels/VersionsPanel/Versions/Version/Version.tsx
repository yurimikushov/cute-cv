import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { useIsSignedIn } from 'services/auth'
import EditCvMetadataModal from 'components/cv/modals/EditCvMetadataModal'
import useEditCvMetadataModal from './hooks/useEditCvMetadataModal'
import useMakeCopyModal from './hooks/useMakeCopyModal'
import Menu from './Menu'
import VersionProps from './Version.props'

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`

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
    isEditNameModalOpened,
    handleOpenEditNameModal,
    handleCloseEditNameModal,
    handleUpdateCvMetadata,
  } = useEditCvMetadataModal(onUpdateCvMetadata)
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
          onEditName={handleOpenEditNameModal}
          onMakeCopy={handleOpenMakeCopyModal}
          onDelete={onDelete}
        />
      )}
      {isSignedIn && isEditNameModalOpened && (
        <EditCvMetadataModal
          title={t('editNameModal.title')}
          submitTitle={t('editNameModal.save')}
          submitSubmittingTitle={t('editNameModal.savingStatus')}
          initialName={name}
          initialAllowShare={allowShare}
          onSubmit={handleUpdateCvMetadata}
          onClose={handleCloseEditNameModal}
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
