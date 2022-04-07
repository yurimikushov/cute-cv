import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import noop from 'lodash/noop'
import { H2 } from 'components/ui/H'
import Button from 'components/ui/Button'
import { useToolbarPanel } from '../ToolbarPanelContext'
import ShareProps from './Share.props'

const Container = styled.div`
  & > * + * {
    margin-top: 0.25rem;
  }
`

const Share: FC<ShareProps> = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'toolbar.share' })
  const { onCopySharableLink = noop } = useToolbarPanel()

  return (
    <Container {...props}>
      <H2>{t('title')}</H2>
      <Button appearance='text' onClick={onCopySharableLink}>
        {t('copyLink')}
      </Button>
    </Container>
  )
}

export default Share
