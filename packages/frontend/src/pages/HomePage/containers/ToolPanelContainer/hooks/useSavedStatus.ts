import { useTranslation } from 'react-i18next'
import { LanguageEnum } from 'shared/translations'
import timeSince from 'shared/lib/timeSince'
import { useCurrentCvMetadata } from 'services/edit-cv'
import { useAuth } from 'services/auth'

// const UPDATE_TIMING = 5_000

const useSavedStatus = () => {
  const { t, i18n } = useTranslation('translation', { keyPrefix: 'panel' })
  const { isSignInSkipped } = useAuth()
  const { metadata: { isSaved, savedAt } = { isSaved: false, savedAt: null } } =
    useCurrentCvMetadata()

  if (isSignInSkipped) {
    return t('noSave')
  }

  if (!isSaved) {
    return t('notSaved')
  }

  if (!savedAt) {
    return ''
  }

  return t('savedAt', {
    savedAt: timeSince(savedAt, i18n.language as LanguageEnum),
  })
}

export default useSavedStatus
