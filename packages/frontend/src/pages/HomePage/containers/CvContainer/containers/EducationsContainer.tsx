import { VFC } from 'react'
import styled from 'styled-components'
import radiuses from 'shared/styles/radiuses'
import DndList from 'shared/ui/DndList'
import {
  useEditable,
  useCurrentCvEducations,
  EDUCATIONS_MAX_COUNT,
} from 'services/edit-cv'
import Educations from 'shared/ui/cv/page/Educations'
import EducationContainer from './EducationContainer'

const DraggableList = styled(DndList)`
  & > * + * {
    margin-top: 1rem;
  }
`

const DraggableItem = styled(DraggableList.Item)`
  border-radius: ${radiuses.md};
`

const EducationsContainer: VFC = () => {
  const { editable } = useEditable()
  const {
    educations = [],
    addEducation,
    reorderEducations,
  } = useCurrentCvEducations()

  return (
    <Educations>
      <DraggableList isDndDisabled={!editable} onDragEnd={reorderEducations}>
        {educations.map((id) => (
          <DraggableItem key={id}>
            <EducationContainer id={id} />
          </DraggableItem>
        ))}
      </DraggableList>
      {editable && educations.length < EDUCATIONS_MAX_COUNT && (
        <Educations.AddButton onClick={addEducation} />
      )}
    </Educations>
  )
}

export default EducationsContainer
