import { FC } from 'react'
import cn from 'classnames'
import { useTranslation } from 'react-i18next'
import Card from 'components/Card'
import TextInput from 'components/TextInput'
import ExperiencePropsT from './Experience.props'

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

  return (
    <Card
      className={cn(className, 'p-2 flex flex-col gap-2 items-start')}
      hasClose
      onClose={onDelete}
    >
      <TextInput
        className='block font-bold'
        size='md'
        value={position}
        placeholder={t('position.placeholder')}
        onChange={onPositionChange}
      />
      <TextInput
        className='block'
        value={company}
        placeholder={t('company.placeholder')}
        onChange={onCompanyChange}
      />
      <TextInput
        className='block'
        size='sm'
        value={duration}
        placeholder={t('duration.placeholder')}
        onChange={onDurationChange}
      />
      <TextInput
        className='block'
        value={description}
        placeholder={t('description.placeholder')}
        onChange={onDescriptionChange}
      />
    </Card>
  )
}

export default Experience
