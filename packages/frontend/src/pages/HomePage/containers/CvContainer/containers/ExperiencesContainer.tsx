import { VFC } from 'react'
import styled from 'styled-components'
import radiuses from 'shared/styles/radiuses'
import DndList from 'shared/ui/DndList'
import {
  useEditable,
  useCurrentCvExperiences,
  EXPERIENCES_MAX_COUNT,
} from 'services/edit-cv'
import Experiences from 'shared/ui/cv/page/Experiences'
import ExperienceContainer from './ExperienceContainer'

const DraggableList = styled(DndList)`
  & > * + * {
    margin-top: 1rem;
  }
`

const DraggableItem = styled(DraggableList.Item)`
  border-radius: ${radiuses.md};
`

const ExperiencesContainer: VFC = () => {
  const { editable } = useEditable()
  const {
    experiences = [],
    addExperience,
    reorderExperiences,
  } = useCurrentCvExperiences()

  return (
    <Experiences>
      <DraggableList isDndDisabled={!editable} onDragEnd={reorderExperiences}>
        {experiences.map((id) => (
          <DraggableItem key={id}>
            <ExperienceContainer id={id} />
          </DraggableItem>
        ))}
      </DraggableList>
      {editable && experiences.length < EXPERIENCES_MAX_COUNT && (
        <Experiences.AddButton onClick={addExperience} />
      )}
    </Experiences>
  )
}

export default ExperiencesContainer
