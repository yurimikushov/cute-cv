import { FC } from 'react'
import cn from 'classnames'
import { useTranslation } from 'react-i18next'
import { useEditable } from 'services/app'
import Card from 'components/Card'
import TextInput from 'components/TextInput'
import ExperiencePropsT from './Experience.props'
import TextArea from 'components/TextArea'

const Experience: FC<ExperiencePropsT> = ({
  className,
  position,
  company,
  duration,
  description,
  onPositionChange,
  onCompanyChange,
  onDurationChange,
  onDescriptionChange,
  onDelete,
}) => {
  const { t } = useTranslation('translation', { keyPrefix: 'experience' })
  const { editable } = useEditable()

  return (
    <Card
      className={cn(className, 'flex flex-col gap-2 items-start')}
      withBorder={editable}
      hasClose={editable}
      onClose={onDelete}
    >
      <TextInput
        className='block font-bold'
        size='md'
        disabled={!editable}
        value={position}
        placeholder={t('position.placeholder')}
        onChange={onPositionChange}
      />
      <TextInput
        className='block'
        disabled={!editable}
        value={company}
        placeholder={t('company.placeholder')}
        onChange={onCompanyChange}
      />
      <TextInput
        className='block text-gray-300'
        size='sm'
        disabled={!editable}
        value={duration}
        placeholder={t('duration.placeholder')}
        onChange={onDurationChange}
      />
      <TextArea
        className='block min-w-full text-sm'
        disabled={!editable}
        value={description}
        placeholder={t('description.placeholder')}
        onChange={onDescriptionChange}
      />
    </Card>
  )
}

export default Experience
