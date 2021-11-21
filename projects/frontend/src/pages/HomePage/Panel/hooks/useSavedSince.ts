import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import isNull from 'lodash/isNull'
import { LanguageEnum } from 'translation'
import timeSince from 'lib/timeSince'
import { useIsCVSaved } from 'services/cv'

const UPDATE_TIMING = 5_000

const useSavedSince = () => {
  const { t, i18n } = useTranslation('translation', { keyPrefix: 'panel' })
  const { isCVSaved, savedAt } = useIsCVSaved()
  const [savedSince, setSavedSince] = useState('')

  useEffect(() => {
    const handleSetSavedSince = () => {
      setSavedSince(() => {
        if (!isCVSaved) {
          return t('notSaved')
        }

        if (isNull(savedAt)) {
          return t('saved')
        }

        return t('savedAt', {
          savedAt: timeSince(savedAt, i18n.language as LanguageEnum),
        })
      })
    }

    handleSetSavedSince()

    const intervalId = setInterval(handleSetSavedSince, UPDATE_TIMING)

    return () => {
      clearInterval(intervalId)
    }
  }, [isCVSaved, savedAt, i18n.language])

  return savedSince
}

export default useSavedSince
