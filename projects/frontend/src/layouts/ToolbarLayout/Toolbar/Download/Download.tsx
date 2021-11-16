import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import H from 'components/H'
import Button from 'components/Button'
import DownloadPropsT from './Download.props'

const Download: FC<DownloadPropsT> = ({ className }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'toolbar' })

  return (
    <div className={className}>
      <H tag='2'>{t('download.title')}</H>
      <Button withPaddings={false}>{t('download.pdf')}</Button>
    </div>
  )
}

export default Download
