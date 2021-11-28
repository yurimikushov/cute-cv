import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { useEditable } from 'services/cv'
import Card from 'components/Card'
import TextInput from 'components/TextInput'
import TextArea from 'components/TextArea'
import colors from 'styles/colors'
import ExperiencePropsT from './Experience.props'

const Container = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`

const Position = styled(TextInput)`
  display: block;
  font-weight: bold;
`

const Company = styled(TextInput)`
  display: block;
`

const Duration = styled(TextInput)`
  display: block;
  color: ${colors.gray300};
`

const Description = styled(TextArea)`
  display: block;
  min-width: 100%;
`

const Experience: FC<ExperiencePropsT> = ({
  position,
  company,
  duration,
  description,
  onPositionChange,
  onCompanyChange,
  onDurationChange,
  onDescriptionChange,
  onDelete,
  ...props
}) => {
  const { t } = useTranslation('translation', { keyPrefix: 'experience' })
  const { editable } = useEditable()

  return (
    <Container
      {...props}
      withBorder={editable}
      hasClose={editable}
      onClose={onDelete}
    >
      <Position
        size='md'
        disabled={!editable}
        value={position}
        placeholder={t('position.placeholder')}
        onChange={onPositionChange}
      />
      <Company
        size='md'
        disabled={!editable}
        value={company}
        placeholder={t('company.placeholder')}
        onChange={onCompanyChange}
      />
      <Duration
        size='sm'
        disabled={!editable}
        value={duration}
        placeholder={t('duration.placeholder')}
        onChange={onDurationChange}
      />
      <Description
        disabled={!editable}
        value={description}
        placeholder={t('description.placeholder')}
        onChange={onDescriptionChange}
      />
    </Container>
  )
}

export default Experience
