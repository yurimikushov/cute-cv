import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import Popup from 'components/Popup'
import Card from 'components/Card'
import Button, { ArrowButton } from 'components/Button'
import MenuProps from './Menu.props'

const Content = styled(Card)`
  max-width: 8rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const MenuItem = styled(Button)`
  min-width: 5rem;
  width: min-content;
`

const Menu: FC<MenuProps> = ({
  disabled = false,
  onEditName,
  onDelete,
  ...props
}) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'versions.menu',
  })

  return (
    <Popup
      {...props}
      trigger='click'
      content={
        <Content>
          <MenuItem appearance='text' withoutPaddings onClick={onEditName}>
            {t('editName')}
          </MenuItem>
          <MenuItem appearance='text' withoutPaddings onClick={onDelete}>
            {t('delete')}
          </MenuItem>
        </Content>
      }
    >
      <ArrowButton disabled={disabled} />
    </Popup>
  )
}

export default Menu
