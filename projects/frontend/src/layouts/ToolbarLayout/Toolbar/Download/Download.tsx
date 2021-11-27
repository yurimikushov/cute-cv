import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useDownload } from 'services/cv'
import { H2 } from 'components/H'
import Button from 'components/Button'
import DownloadPropsT from './Download.props'

const Download: FC<DownloadPropsT> = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'toolbar' })
  const { handleDownloadPDF } = useDownload()

  return (
    <div {...props}>
      <H2>{t('download.title')}</H2>
      <Button withPaddings={false} onClick={handleDownloadPDF}>
        {t('download.pdf')}
      </Button>
    </div>
  )
}

export default Download
