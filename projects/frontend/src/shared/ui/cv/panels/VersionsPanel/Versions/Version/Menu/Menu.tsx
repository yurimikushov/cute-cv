import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import Popup from 'shared/ui/Popup'
import Card from 'shared/ui/Card'
import Button, { ArrowButton } from 'shared/ui/Button'
import MenuProps from './Menu.props'

const Content = styled(Card)`
  max-width: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`

const MenuItem = styled(Button).attrs({
  appearance: 'text',
  withoutPaddings: true,
})`
  min-width: 3rem;
  width: min-content;
`

const Menu: FC<MenuProps> = ({
  disabled = false,
  onEditCvMetadata,
  onMakeCopy,
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
          <MenuItem onClick={onEditCvMetadata}>{t('edit')}</MenuItem>
          <MenuItem onClick={onMakeCopy}>{t('makeCopy')}</MenuItem>
          <MenuItem onClick={onDelete}>{t('delete')}</MenuItem>
        </Content>
      }
    >
      <ArrowButton disabled={disabled} />
    </Popup>
  )
}

export default Menu
