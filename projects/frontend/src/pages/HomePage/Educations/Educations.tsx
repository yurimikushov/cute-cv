import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import isEmpty from 'lodash/isEmpty'
import size from 'lodash/size'
import map from 'lodash/map'
import { useEditable, useEducations, MAX_EDUCATIONS_SIZE } from 'services/cv'
import useEffectWhen from 'hooks/useEffectWhen'
import { H1 } from 'components/H'
import DndList from 'components/DndList'
import Button from 'components/Button'
import Education from './Education'
import EducationsPropsT from './Educations.props'

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

const Add = styled(Button)`
  display: block;
  margin: 0.5rem auto 0;
`

const Educations: FC<EducationsPropsT> = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'education' })
  const { editable } = useEditable()
  const {
    educations,
    handleAdd,
    handleDegreeChange,
    handleUniversityChange,
    handleDurationChange,
    handleDelete,
    handleReorder,
  } = useEducations()

  useEffectWhen(handleAdd, isEmpty(educations))

  return (
    <Container {...props}>
      <H1>{t('title')}</H1>
      <DraggableList
        isDndDisabled={!editable}
        onDragEnd={(startIndex, endIndex) =>
          handleReorder({ startIndex, endIndex })
        }
      >
        {map(educations, ({ id, degree, university, duration }) => (
          <DraggableList.Item key={id}>
            <Education
              key={id}
              degree={degree}
              university={university}
              duration={duration}
              onDegreeChange={(degree) => handleDegreeChange({ id, degree })}
              onUniversityChange={(university) =>
                handleUniversityChange({ id, university })
              }
              onDurationChange={(duration) =>
                handleDurationChange({ id, duration })
              }
              onDelete={() => handleDelete({ id })}
            />
          </DraggableList.Item>
        ))}
      </DraggableList>
      {editable && size(educations) < MAX_EDUCATIONS_SIZE && (
        <Add onClick={handleAdd}>Add</Add>
      )}
    </Container>
  )
}

export default Educations
