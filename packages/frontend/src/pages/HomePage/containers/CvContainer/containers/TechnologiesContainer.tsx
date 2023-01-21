import { VFC } from 'react'
import {
  useEditable,
  useCurrentCvTechnologies,
  TECHNOLOGIES_MAX_LENGTH,
} from 'services/edit-cv'
import Technologies from 'shared/ui/cv/page/Technologies'

const TechnologiesContainer: VFC = () => {
  const { editable } = useEditable()
  const [technologies, changeTechnologies] = useCurrentCvTechnologies()

  return (
    <Technologies
      editable={editable}
      technologies={technologies ?? ''}
      maxLength={TECHNOLOGIES_MAX_LENGTH}
      onChange={changeTechnologies}
    />
  )
}

export default TechnologiesContainer
