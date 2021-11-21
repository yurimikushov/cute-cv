import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import cn from 'classnames'
import { useEditable } from 'services/cv'
import { useSavedSince } from './hooks'
import Button from 'components/Button'
import PanelPropsT from './Panel.props'

const Panel: FC<PanelPropsT> = ({ className }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'panel' })
  const { editable, handleToggle } = useEditable()
  const savedSince = useSavedSince()

  return (
    <div className={cn(className, 'flex justify-between')}>
      <div className='text-gray-300'>{savedSince}</div>
      <Button onClick={handleToggle}>
        {editable ? t('preview') : t('edit')}
      </Button>
    </div>
  )
}

export default Panel
