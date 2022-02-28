import { FC } from 'react'
import styled from 'styled-components'
import Popup from 'components/Popup'
import Card from 'components/Card'
import Button from 'components/Button'
import { ReactComponent as ArrowBottomIcon } from 'icons/arrow-bottom.svg'
import VersionProps from './Version.props'
import { useTranslation } from 'react-i18next'

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`

const Content = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const ArrowButton = styled(Button).attrs({
  children: <ArrowBottomIcon />,
})`
  width: 0.9rem;
  height: 0.9rem;
`

const Version: FC<VersionProps> = ({ name, disabled, onDelete, ...props }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'versions' })

  return (
    <Container {...props}>
      {name}
      <Popup
        trigger='click'
        content={
          <Content>
            <Button withPaddings={false} onClick={onDelete}>
              {t('delete')}
            </Button>
          </Content>
        }
      >
        <ArrowButton withPaddings={false} disabled={disabled} />
      </Popup>
    </Container>
  )
}

export default Version
