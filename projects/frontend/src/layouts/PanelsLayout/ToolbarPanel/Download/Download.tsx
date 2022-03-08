import { FC, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { useDownload, useEditable } from 'services/cv'
import { H2 } from 'components/H'
import Button from 'components/Button'
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
  const prevEditableRef = useRef<boolean>(false)
  const { editable, handleToggle } = useEditable()
  const { isDownloading, handleDownloadPDF, handleDownloadJSON } = useDownload()

  const withToggleEditable = (handler: () => Promise<void>) => {
    return async function withToggleEditable() {
      prevEditableRef.current = editable

      if (editable) {
        handleToggle()
      }

      await handler()

      if (prevEditableRef.current) {
        handleToggle()
      }
    }
  }

  return (
    <Container {...props}>
      <H2>{t('title')}</H2>
      <Button
        appearance='text'
        withoutPaddings
        disabled={isDownloading}
        onClick={withToggleEditable(handleDownloadPDF)}
      >
        {t('pdf')}
      </Button>
      <Button
        appearance='text'
        withoutPaddings
        disabled={isDownloading}
        onClick={withToggleEditable(handleDownloadJSON)}
      >
        {t('json')}
      </Button>
    </Container>
  )
}

export default Download
