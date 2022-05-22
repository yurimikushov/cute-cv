import { FC, ChangeEvent } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import Card from 'shared/ui/Card'
import TextInput from 'shared/ui/TextInput'
import TextArea from 'shared/ui/TextArea'
import colors from 'shared/styles/colors'
import ExperienceProps from './Experience.props'

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
  ${({ readonly }) => !readonly && 'min-height: 5rem;'}
`

const Experience: FC<ExperienceProps> = ({
  editable,
  position,
  company,
  duration,
  description,
  positionMaxLength,
  companyMaxLength,
  durationMaxLength,
  descriptionMaxLength,
  onPositionChange,
  onCompanyChange,
  onDurationChange,
  onDescriptionChange,
  onDelete,
  ...props
}) => {
  const { t } = useTranslation('translation', { keyPrefix: 'experience' })

  const handleChangePosition = (e: ChangeEvent<HTMLInputElement>) => {
    onPositionChange(e.target.value)
  }

  const handleChangeCompany = (e: ChangeEvent<HTMLInputElement>) => {
    onCompanyChange(e.target.value)
  }

  const handleChangeDuration = (e: ChangeEvent<HTMLInputElement>) => {
    onDurationChange(e.target.value)
  }

  const handleChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onDescriptionChange(e.target.value)
  }

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
        maxLength={positionMaxLength}
        onChange={handleChangePosition}
      />
      <Company
        size='md'
        readonly={!editable}
        value={company}
        placeholder={t('company.placeholder')}
        maxLength={companyMaxLength}
        onChange={handleChangeCompany}
      />
      <Duration
        size='sm'
        readonly={!editable}
        value={duration}
        placeholder={t('duration.placeholder')}
        maxLength={durationMaxLength}
        onChange={handleChangeDuration}
      />
      <Description
        readonly={!editable}
        value={description}
        placeholder={t('description.placeholder')}
        maxLength={descriptionMaxLength}
        onChange={handleChangeDescription}
      />
    </Container>
  )
}

export default Experience
