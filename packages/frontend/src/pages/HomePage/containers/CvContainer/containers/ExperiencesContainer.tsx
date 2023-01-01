import { FC } from 'react'
import styled from 'styled-components'
import isEmpty from 'shared/lib/isEmpty'
import radiuses from 'shared/styles/radiuses'
import useLayoutEffectWhen from 'shared/hooks/useLayoutEffectWhen'
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

const ExperiencesContainer: FC = () => {
  const { editable } = useEditable()
  const {
    experiences = [],
    addExperience,
    reorderExperiences,
  } = useCurrentCvExperiences()

  useLayoutEffectWhen(addExperience, isEmpty(experiences))

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
