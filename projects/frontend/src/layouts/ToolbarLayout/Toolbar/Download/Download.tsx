import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { useDownload } from 'services/cv'
import { H2 } from 'components/H'
import Button from 'components/Button'
import DownloadPropsT from './Download.props'

const Container = styled.div`
  & > * + * {
    margin-top: 0.25rem;
  }
`

const Download: FC<DownloadPropsT> = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'toolbar' })
  const { handleDownloadPDF } = useDownload()

  return (
    <Container {...props}>
      <H2>{t('download.title')}</H2>
      <Button withPaddings={false} onClick={handleDownloadPDF}>
        {t('download.pdf')}
      </Button>
    </Container>
  )
}

export default Download
