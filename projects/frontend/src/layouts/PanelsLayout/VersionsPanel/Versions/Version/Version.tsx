import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { useIsSignedIn } from 'services/auth'
import EditCvModal from '../../EditCvModal'
import useEditNameModal from './hooks/useEditNameModal'
import useMakeCopyModal from './hooks/useMakeCopyModal'
import Menu from './Menu'
import VersionProps from './Version.props'

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`

const Name = styled.span`
  max-width: 5rem;
  overflow-wrap: break-word;
`

const Version: FC<VersionProps> = ({
  name,
  disabled,
  onUpdateCvName,
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
    handleUpdateCvName,
  } = useEditNameModal(onUpdateCvName)
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
        <EditCvModal
          title={t('editNameModal.title')}
          submitTitle={t('editNameModal.save')}
          submitSubmittingTitle={t('editNameModal.savingStatus')}
          initialName={name}
          onSubmit={handleUpdateCvName}
          onClose={handleCloseEditNameModal}
        />
      )}
      {isSignedIn && isMakeCopyModalOpened && (
        <EditCvModal
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
