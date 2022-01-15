import { FC, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { useDownload, useEditable } from 'services/cv'
import { H2 } from 'components/H'
import Button from 'components/Button'
import DownloadPropsT from './Download.props'

const Container = styled.div`
  & > * + * {
    margin-top: 0.25rem;
    display: flex;
    flex-direction: column;
  }
`

const Download: FC<DownloadPropsT> = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'toolbar' })
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
      <H2>{t('download.title')}</H2>
      <Button
        withPaddings={false}
        disabled={isDownloading}
        onClick={withToggleEditable(handleDownloadPDF)}
      >
        {t('download.pdf')}
      </Button>
      <Button
        withPaddings={false}
        disabled={isDownloading}
        onClick={withToggleEditable(handleDownloadJSON)}
      >
        {t('download.json')}
      </Button>
    </Container>
  )
}

export default Download
