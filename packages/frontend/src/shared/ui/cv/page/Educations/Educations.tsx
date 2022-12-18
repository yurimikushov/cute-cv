import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import noop from 'shared/lib/noop'
import size from 'lodash/size'
import { H1 } from 'shared/ui/H'
import DndList from 'shared/ui/DndList'
import Button from 'shared/ui/Button'
import radiuses from 'shared/styles/radiuses'
import Education from './Education'
import EducationsProps from './Educations.props'

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

const Educations: FC<EducationsProps> = ({
  editable,
  educations,
  maxCount = Number.MAX_SAFE_INTEGER,
  degreeMaxLength,
  universityMaxLength,
  durationMaxLength,
  onChange = noop,
  onReorder = noop,
  onDelete = noop,
  onAdd,
  ...props
}) => {
  const { t } = useTranslation('translation', { keyPrefix: 'education' })

  return (
    <Container {...props}>
      <H1>{t('title')}</H1>
      <DraggableList isDndDisabled={!editable} onDragEnd={onReorder}>
        {educations.map(({ id, degree, university, duration }) => (
          <DraggableItem key={id}>
            <Education
              editable={editable}
              degree={degree}
              university={university}
              duration={duration}
              degreeMaxLength={degreeMaxLength}
              universityMaxLength={universityMaxLength}
              durationMaxLength={durationMaxLength}
              onDegreeChange={(degree) =>
                onChange(id, degree, university, duration)
              }
              onUniversityChange={(university) =>
                onChange(id, degree, university, duration)
              }
              onDurationChange={(duration) =>
                onChange(id, degree, university, duration)
              }
              onDelete={() => onDelete(id)}
            />
          </DraggableItem>
        ))}
      </DraggableList>
      {editable && size(educations) < maxCount && (
        <Add appearance='text' onClick={onAdd}>
          {t('add')}
        </Add>
      )}
    </Container>
  )
}

export default Educations
