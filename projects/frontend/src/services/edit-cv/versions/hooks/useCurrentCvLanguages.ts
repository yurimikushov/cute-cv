import { useDispatch, useSelector } from 'react-redux'
import { UpdateLanguagePayload, DeleteLanguagePayload } from '../model'
import { selectCurrentCvId, selectCurrentCvLanguages } from '../selectors'
import { addLanguage, updateLanguage, deleteLanguage } from '../slice'

const useCurrentCvLanguages = () => {
  const id = useSelector(selectCurrentCvId)
  const languages = useSelector(selectCurrentCvLanguages)

  const dispatch = useDispatch()

  const handleAddLanguage = () => {
    dispatch(addLanguage({ id }))
  }

  const handleChangeLanguage = (
    languageId: UpdateLanguagePayload['languageId'],
    language: UpdateLanguagePayload['language']
  ) => {
    dispatch(
      updateLanguage({
        id,
        languageId,
        language,
      })
    )
  }

  const handleDeleteLanguage = (
    languageId: DeleteLanguagePayload['languageId']
  ) => {
    dispatch(deleteLanguage({ id, languageId }))
  }

  return {
    languages,
    addLanguage: handleAddLanguage,
    changeLanguage: handleChangeLanguage,
    deleteLanguage: handleDeleteLanguage,
  }
}

export default useCurrentCvLanguages
