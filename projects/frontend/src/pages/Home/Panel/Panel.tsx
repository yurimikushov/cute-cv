import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import cn from 'classnames'
import { useEditable, useSaving } from 'services/app'
import Button from 'components/Button'
import PanelPropsT from './Panel.props'

const Panel: FC<PanelPropsT> = ({ className }) => {
  const { t, i18n } = useTranslation('translation', { keyPrefix: 'panel' })
  const { editable, handleToggle } = useEditable()
  const { isSaved, savedAt } = useSaving()

  return (
    <div className={cn(className, 'flex justify-between')}>
      <div className='text-gray-300'>
        {isSaved
          ? `Saved at ${savedAt?.toLocaleDateString(i18n.language, {
              hour: '2-digit',
              minute: '2-digit',
            })}`
          : 'Not saved'}
      </div>
      <Button onClick={handleToggle}>
        {editable ? t('preview') : t('edit')}
      </Button>
    </div>
  )
}

export default Panel
