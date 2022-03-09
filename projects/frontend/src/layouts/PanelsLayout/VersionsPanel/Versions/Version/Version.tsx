import { FC } from 'react'
import styled from 'styled-components'
import { useIsSignedIn } from 'services/auth'
import useEditNameModal from './hooks/useEditNameModal'
import Menu from './Menu'
import EditNameModal from './EditNameModal'
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
  onDelete,
  ...props
}) => {
  const { isSignedIn } = useIsSignedIn()
  const {
    isEditNameModalOpened,
    handleOpenEditNameModal,
    handleCloseEditNameModal,
    handleUpdateCvName,
  } = useEditNameModal(onUpdateCvName)

  return (
    <Container {...props}>
      <Name>{name}</Name>
      {isSignedIn && (
        <Menu
          disabled={disabled}
          onEditName={handleOpenEditNameModal}
          onDelete={onDelete}
        />
      )}
      {isSignedIn && isEditNameModalOpened && (
        <EditNameModal
          name={name}
          onClose={handleCloseEditNameModal}
          onSave={handleUpdateCvName}
        />
      )}
    </Container>
  )
}

export default Version
