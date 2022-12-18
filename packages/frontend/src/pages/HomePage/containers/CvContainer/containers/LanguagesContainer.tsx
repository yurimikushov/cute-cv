import { FC } from 'react'
import isEmpty from 'shared/lib/isEmpty'
import useLayoutEffectWhen from 'shared/hooks/useLayoutEffectWhen'
import {
  useEditable,
  useCurrentCvLanguages,
  LANGUAGES_MAX_COUNT,
  LANGUAGE_MAX_LENGTH,
} from 'services/edit-cv'
import Languages from 'shared/ui/cv/page/Languages'

const LanguagesContainer: FC = () => {
  const { editable } = useEditable()
  const { languages, changeLanguage, deleteLanguage, addLanguage } =
    useCurrentCvLanguages()

  useLayoutEffectWhen(addLanguage, isEmpty(languages))

  return (
    <Languages
      editable={editable}
      languages={languages}
      maxCount={LANGUAGES_MAX_COUNT}
      maxLength={LANGUAGE_MAX_LENGTH}
      onChange={changeLanguage}
      onDelete={deleteLanguage}
      onAdd={addLanguage}
    />
  )
}

export default LanguagesContainer
