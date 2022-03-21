import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import size from 'lodash/size'
import map from 'lodash/map'
import { H1 } from 'components/ui/H'
import DndList from 'components/ui/DndList'
import Button from 'components/ui/Button'
import radiuses from 'styles/radiuses'
import Experience from './Experience'
import ExperiencesProps from './Experiences.props'

const Container = styled.div`
  & > * + * {
    margin-top: 1rem;
  }
`

const DraggableList = styled(DndList)`
  & > * + * {
    margin-top: 1rem;
  }
`

const DraggableItem = styled(DraggableList.Item)`
  border-radius: ${radiuses.md};
`

const Add = styled(Button)`
  display: block;
  margin: 0.5rem auto 0;
`

const Experiences: FC<ExperiencesProps> = ({
  editable,
  experiences,
  maxCount,
  positionMaxLength,
  companyMaxLength,
  durationMaxLength,
  descriptionMaxLength,
  onChange,
  onReorder,
  onDelete,
  onAdd,
  ...props
}) => {
  const { t } = useTranslation('translation', { keyPrefix: 'experience' })

  return (
    <Container {...props}>
      <H1>{t('title')}</H1>
      <DraggableList isDndDisabled={!editable} onDragEnd={onReorder}>
        {map(
          experiences,
          ({ id, position, company, duration, description }) => (
            <DraggableItem key={id}>
              <Experience
                editable={editable}
                position={position}
                company={company}
                duration={duration}
                description={description}
                positionMaxLength={positionMaxLength}
                companyMaxLength={companyMaxLength}
                durationMaxLength={durationMaxLength}
                descriptionMaxLength={descriptionMaxLength}
                onPositionChange={(position) =>
                  onChange(id, position, company, duration, description)
                }
                onCompanyChange={(company) =>
                  onChange(id, position, company, duration, description)
                }
                onDurationChange={(duration) =>
                  onChange(id, position, company, duration, description)
                }
                onDescriptionChange={(description) =>
                  onChange(id, position, company, duration, description)
                }
                onDelete={() => onDelete(id)}
              />
            </DraggableItem>
          )
        )}
      </DraggableList>
      {editable && size(experiences) < maxCount && (
        <Add appearance='text' onClick={onAdd}>
          {t('add')}
        </Add>
      )}
    </Container>
  )
}

export default Experiences
