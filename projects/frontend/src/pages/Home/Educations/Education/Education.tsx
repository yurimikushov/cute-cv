import { FC } from 'react'
import cn from 'classnames'
import { useTranslation } from 'react-i18next'
import { useEditable } from 'services/app'
import Card from 'components/Card'
import TextInput from 'components/TextInput'
import EducationPropsT from './Education.props'

const Education: FC<EducationPropsT> = ({
  className,
  degree,
  university,
  duration,
  onDegreeChange,
  onUniversityChange,
  onDurationChange,
  onDelete,
}) => {
  const { t } = useTranslation('translation', { keyPrefix: 'education' })
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
        value={degree}
        placeholder={t('degree.placeholder')}
        onChange={onDegreeChange}
      />
      <TextInput
        className='block'
        disabled={!editable}
        value={university}
        placeholder={t('university.placeholder')}
        onChange={onUniversityChange}
      />
      <TextInput
        className='block'
        size='sm'
        disabled={!editable}
        value={duration}
        placeholder={t('duration.placeholder')}
        onChange={onDurationChange}
      />
    </Card>
  )
}

export default Education
