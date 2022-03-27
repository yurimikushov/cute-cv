import { FC, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { H2 } from 'components/ui/H'
import Button from 'components/ui/Button'
import DownloadProps from './Download.props'
import { useToolbarPanel } from '../ToolbarPanelContext'

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
    editable,
    onToggleEditable,
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
      <Button
        appearance='text'
        withoutPaddings
        disabled={disabled}
        onClick={withToggleEditable(onDownloadJSON)}
      >
        {t('json')}
      </Button>
    </Container>
  )
}

export default Download
