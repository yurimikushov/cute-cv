import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useDownload } from 'services/cv'
import H from 'components/H'
import Button from 'components/Button'
import DownloadPropsT from './Download.props'

const Download: FC<DownloadPropsT> = ({ className }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'toolbar' })
  const { handleDownloadPDF } = useDownload()

  return (
    <div className={className}>
      <H tag='2'>{t('download.title')}</H>
      <Button withPaddings={false} onClick={handleDownloadPDF}>
        {t('download.pdf')}
      </Button>
    </div>
  )
}

export default Download
