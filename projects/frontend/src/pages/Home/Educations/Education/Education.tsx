import { FC } from 'react'
import cn from 'classnames'
import { useTranslation } from 'react-i18next'
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

  return (
    <Card
      className={cn(className, 'p-2 flex flex-col gap-2 items-start')}
      hasClose
      onClose={onDelete}
    >
      <TextInput
        className='block font-bold'
        size='md'
        value={degree}
        placeholder={t('degree.placeholder')}
        onChange={onDegreeChange}
      />
      <TextInput
        className='block'
        value={university}
        placeholder={t('university.placeholder')}
        onChange={onUniversityChange}
      />
      <TextInput
        className='block'
        size='sm'
        value={duration}
        placeholder={t('duration.placeholder')}
        onChange={onDurationChange}
      />
    </Card>
  )
}

export default Education
