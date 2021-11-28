import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { useEditable } from 'services/cv'
import Card from 'components/Card'
import TextInput from 'components/TextInput'
import EducationPropsT from './Education.props'

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
  color: #73808d;
`

const Education: FC<EducationPropsT> = ({
  degree,
  university,
  duration,
  onDegreeChange,
  onUniversityChange,
  onDurationChange,
  onDelete,
  ...props
}) => {
  const { t } = useTranslation('translation', { keyPrefix: 'education' })
  const { editable } = useEditable()

  return (
    <Container
      {...props}
      withBorder={editable}
      hasClose={editable}
      onClose={onDelete}
    >
      <Degree
        size='md'
        disabled={!editable}
        value={degree}
        placeholder={t('degree.placeholder')}
        onChange={onDegreeChange}
      />
      <University
        size='md'
        disabled={!editable}
        value={university}
        placeholder={t('university.placeholder')}
        onChange={onUniversityChange}
      />
      <Duration
        size='sm'
        disabled={!editable}
        value={duration}
        placeholder={t('duration.placeholder')}
        onChange={onDurationChange}
      />
    </Container>
  )
}

export default Education
