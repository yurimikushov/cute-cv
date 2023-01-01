import InternalLanguages from './Languages'
import Language from './Language'
import AddButton from './AddButton'

type InternalLanguagesProps = typeof InternalLanguages

type LanguagesInterface = InternalLanguagesProps & {
    Language: typeof Language
    AddButton: typeof AddButton
}

const Languages = InternalLanguages as LanguagesInterface

Languages.Language = Language
Languages.AddButton = AddButton

export default Languages
