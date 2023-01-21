import { VFC } from 'react'
import {
  useEditable,
  useCurrentCvLanguages,
  LANGUAGES_MAX_COUNT,
} from 'services/edit-cv'
import Languages from 'shared/ui/cv/page/Languages'
import LanguageContainer from './LanguageContainer'

const LanguagesContainer: VFC = () => {
  const { editable } = useEditable()
  const { languages = [], addLanguage } = useCurrentCvLanguages()

  return (
    <Languages>
      {languages.map((id) => (
        <LanguageContainer key={id} id={id} />
      ))}
      {editable && languages.length < LANGUAGES_MAX_COUNT && (
        <Languages.AddButton onClick={addLanguage} />
      )}
    </Languages>
  )
}

export default LanguagesContainer
