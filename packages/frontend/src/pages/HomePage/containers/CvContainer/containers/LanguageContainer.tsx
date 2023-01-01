import { VFC } from 'react'
import {
  useEditable,
  useCurrentCvLanguage,
  LANGUAGE_MAX_LENGTH,
} from 'services/edit-cv'
import Languages from 'shared/ui/cv/page/Languages'

const LanguageContainer: VFC<{ id: string }> = ({ id }) => {
  const { editable } = useEditable()
  const { language, updateLanguage, deleteLanguage } = useCurrentCvLanguage(id)

  return (
    <Languages.Language
      key={id}
      editable={editable}
      language={language?.language ?? ''}
      maxLength={LANGUAGE_MAX_LENGTH}
      onChange={(language) => updateLanguage({ language })}
      onDelete={deleteLanguage}
    />
  )
}

export default LanguageContainer
