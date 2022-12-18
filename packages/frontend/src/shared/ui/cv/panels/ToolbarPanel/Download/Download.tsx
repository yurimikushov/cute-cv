import { FC, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import noop from 'shared/lib/noop'
import isDefined from 'shared/lib/isDefined'
import { H2 } from 'shared/ui/H'
import Button from 'shared/ui/Button'
import { useToolbarPanel } from '../ToolbarPanelContext'
import DownloadProps from './Download.props'

const Container = styled.div`
  & > * + * {
    margin-top: 0.25rem;
    display: flex;
    flex-direction: column;
  }
`

const Download: FC<DownloadProps> = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'toolbar.download' })
  const {
    disabled,
    editable = false,
    onToggleEditable = noop,
    onDownloadPDF,
    onDownloadJSON,
  } = useToolbarPanel()

  const prevEditableRef = useRef<boolean>(false)

  const withToggleEditable = (handler: () => Promise<void>) => {
    return async function withToggleEditable() {
      prevEditableRef.current = editable

      if (editable) {
        onToggleEditable()
      }

      await handler()

      if (prevEditableRef.current) {
        onToggleEditable()
      }
    }
  }

  return (
    <Container {...props}>
      <H2>{t('title')}</H2>
      <Button
        appearance='text'
        withoutPaddings
        disabled={disabled}
        onClick={withToggleEditable(onDownloadPDF)}
      >
        {t('pdf')}
      </Button>
      {isDefined(onDownloadJSON) && (
        <Button
          appearance='text'
          withoutPaddings
          disabled={disabled}
          onClick={withToggleEditable(onDownloadJSON)}
        >
          {t('json')}
        </Button>
      )}
    </Container>
  )
}

export default Download
