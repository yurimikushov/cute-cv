import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import noop from 'shared/lib/noop'
import { useWithNotification } from 'shared/ui/Notifications'
import { H2 } from 'shared/ui/H'
import Button from 'shared/ui/Button'
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

  const handleCopySharableLinkAndNotify = useWithNotification(
    onCopySharableLink,
    {
      successContent: t('notifications.linkCopyingResult.success'),
      errorContent: t('notifications.linkCopyingResult.error'),
    }
  )

  return (
    <Container {...props}>
      <H2>{t('title')}</H2>
      <Button appearance='text' onClick={handleCopySharableLinkAndNotify}>
        {t('copyLink')}
      </Button>
    </Container>
  )
}

export default Share
