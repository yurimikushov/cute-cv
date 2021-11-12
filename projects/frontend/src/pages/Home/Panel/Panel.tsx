import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import cn from 'classnames'
import { useEditable } from 'services/app'
import Button from 'components/Button'
import PanelPropsT from './Panel.props'

const Panel: FC<PanelPropsT> = ({ className }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'panel' })
  const { editable, handleToggle } = useEditable()

  return (
    <div className={cn(className, 'flex justify-end')}>
      <Button onClick={handleToggle}>
        {editable ? t('preview') : t('edit')}
      </Button>
    </div>
  )
}

export default Panel
