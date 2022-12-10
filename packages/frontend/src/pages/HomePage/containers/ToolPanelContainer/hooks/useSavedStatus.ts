import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import isNull from 'lodash/isNull'
import { LanguageEnum } from 'shared/translations'
import timeSince from 'shared/lib/timeSince'
import { useCurrentCvMetadata } from 'services/edit-cv'
import { useSkipSignIn } from 'services/auth'

const UPDATE_TIMING = 5_000

const useSavedStatus = () => {
  const { t, i18n } = useTranslation('translation', { keyPrefix: 'panel' })
  const { isSignInSkipped } = useSkipSignIn()
  const { isSaved, savedAt } = useCurrentCvMetadata()
  const [savedStatus, setSavedStatus] = useState('')

  useEffect(() => {
    const handleSetSavedStatus = () => {
      setSavedStatus(() => {
        if (isSignInSkipped) {
          return t('noSave')
        }

        if (!isSaved) {
          return t('notSaved')
        }

        if (isNull(savedAt)) {
          return ''
        }

        return t('savedAt', {
          savedAt: timeSince(savedAt, i18n.language as LanguageEnum),
        })
      })
    }

    handleSetSavedStatus()

    if (!isSignInSkipped) {
      const intervalId = setInterval(handleSetSavedStatus, UPDATE_TIMING)

      return () => {
        clearInterval(intervalId)
      }
    }
  }, [isSignInSkipped, isSaved, savedAt, i18n.language])

  return savedStatus
}

export default useSavedStatus
