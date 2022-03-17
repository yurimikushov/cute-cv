import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import Card from 'components/Card'
import Divider from 'components/Divider'
import Button from 'components/Button'
import { panelMixin } from '../mixins'
import Versions from './Versions'
import VersionsPanelProps from './VersionsPanel.props'

const Container = styled(Card)`
  ${panelMixin}
`

const VersionsPanel: FC<VersionsPanelProps> = ({
  disableActiveElements,
  displayAddButton,
  onAdd,
  ...props
}) => {
  const { t } = useTranslation('translation', { keyPrefix: 'versions' })

  return (
    <Container {...props}>
      <Versions />
      {displayAddButton && (
        <>
          <Divider />
          <Button
            appearance='text'
            withoutPaddings
            disabled={disableActiveElements}
            onClick={onAdd}
          >
            {t('add')}
          </Button>
        </>
      )}
    </Container>
  )
}

export default VersionsPanel
