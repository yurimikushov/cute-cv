import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import {
  useEditable,
  EXPERIENCE_POSITION_MAX_LENGTH,
  EXPERIENCE_COMPANY_MAX_LENGTH,
  EXPERIENCE_DURATION_MAX_LENGTH,
  EXPERIENCE_DESCRIPTION_MAX_LENGTH,
} from 'services/cv'
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
      hoverable
      withBorder={editable}
      hasClose={editable}
      onClose={onDelete}
    >
      <Position
        size='md'
        readonly={!editable}
        value={position}
        placeholder={t('position.placeholder')}
        maxLength={EXPERIENCE_POSITION_MAX_LENGTH}
        onChange={onPositionChange}
      />
      <Company
        size='md'
        readonly={!editable}
        value={company}
        placeholder={t('company.placeholder')}
        maxLength={EXPERIENCE_COMPANY_MAX_LENGTH}
        onChange={onCompanyChange}
      />
      <Duration
        size='sm'
        readonly={!editable}
        value={duration}
        placeholder={t('duration.placeholder')}
        maxLength={EXPERIENCE_DURATION_MAX_LENGTH}
        onChange={onDurationChange}
      />
      <Description
        readonly={!editable}
        value={description}
        placeholder={t('description.placeholder')}
        maxLength={EXPERIENCE_DESCRIPTION_MAX_LENGTH}
        onChange={onDescriptionChange}
      />
    </Container>
  )
}

export default Experience
