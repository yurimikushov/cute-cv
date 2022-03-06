import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { useIsSignedIn } from 'services/auth'
import Popup from 'components/Popup'
import Card from 'components/Card'
import Button from 'components/Button'
import { ReactComponent as ArrowBottomIcon } from 'icons/arrow-bottom.svg'
import useEditNameModal from './hooks/useEditNameModal'
import EditNameModal from './EditNameModal'
import VersionProps from './Version.props'

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`

const Content = styled(Card)`
  max-width: 8rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Name = styled.span`
  max-width: 5rem;
  overflow-wrap: break-word;
`

const ArrowButton = styled(Button).attrs({
  children: <ArrowBottomIcon />,
})`
  width: 0.9rem;
  height: 0.9rem;
`

const Version: FC<VersionProps> = ({
  name,
  disabled,
  onUpdateCvName,
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

  return (
    <Container {...props}>
      <Name>{name}</Name>
      {isSignedIn && (
        <>
          <Popup
            trigger='click'
            content={
              <Content>
                <Button withPaddings={false} onClick={handleOpenEditNameModal}>
                  {t('toolsPopup.editName')}
                </Button>
                <Button withPaddings={false} onClick={onDelete}>
                  {t('toolsPopup.delete')}
                </Button>
              </Content>
            }
          >
            <ArrowButton withPaddings={false} disabled={disabled} />
          </Popup>
          {isEditNameModalOpened && (
            <EditNameModal
              name={name}
              onClose={handleCloseEditNameModal}
              onSave={handleUpdateCvName}
            />
          )}
        </>
      )}
    </Container>
  )
}

export default Version
