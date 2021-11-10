import { FC, useReducer } from 'react'
import { useTranslation } from 'react-i18next'
import cn from 'classnames'
import Button from 'components/Button'
import PanelPropsT from './Panel.props'

const Panel: FC<PanelPropsT> = ({ className }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'panel' })
  const [editable, toggleEditable] = useReducer((editable) => !editable, true)

  return (
    <div className={cn(className, 'flex justify-end')}>
      <Button onClick={toggleEditable}>
        {editable ? t('preview') : t('edit')}
      </Button>
    </div>
  )
}

export default Panel
