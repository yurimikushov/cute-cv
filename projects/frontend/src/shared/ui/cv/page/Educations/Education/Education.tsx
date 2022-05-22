import { FC, ChangeEvent } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import Card from 'shared/ui/Card'
import TextInput from 'shared/ui/TextInput'
import colors from 'styles/colors'
import EducationProps from './Education.props'

const Container = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`

const Degree = styled(TextInput)`
  display: block;
  font-weight: bold;
`

const University = styled(TextInput)`
  display: block;
`

const Duration = styled(TextInput)`
  display: block;
  color: ${colors.gray300};
`

const Education: FC<EducationProps> = ({
  editable,
  degree,
  university,
  duration,
  degreeMaxLength,
  universityMaxLength,
  durationMaxLength,
  onDegreeChange,
  onUniversityChange,
  onDurationChange,
  onDelete,
  ...props
}) => {
  const { t } = useTranslation('translation', { keyPrefix: 'education' })

  const handleChangeDegree = (e: ChangeEvent<HTMLInputElement>) => {
    onDegreeChange(e.target.value)
  }

  const handleChangeUniversity = (e: ChangeEvent<HTMLInputElement>) => {
    onUniversityChange(e.target.value)
  }

  const handleChangeDuration = (e: ChangeEvent<HTMLInputElement>) => {
    onDurationChange(e.target.value)
  }

  return (
    <Container
      {...props}
      hoverable
      withBorder={editable}
      hasClose={editable}
      onClose={onDelete}
    >
      <Degree
        size='md'
        readonly={!editable}
        value={degree}
        placeholder={t('degree.placeholder')}
        maxLength={degreeMaxLength}
        onChange={handleChangeDegree}
      />
      <University
        size='md'
        readonly={!editable}
        value={university}
        placeholder={t('university.placeholder')}
        maxLength={universityMaxLength}
        onChange={handleChangeUniversity}
      />
      <Duration
        size='sm'
        readonly={!editable}
        value={duration}
        placeholder={t('duration.placeholder')}
        maxLength={durationMaxLength}
        onChange={handleChangeDuration}
      />
    </Container>
  )
}

export default Education
