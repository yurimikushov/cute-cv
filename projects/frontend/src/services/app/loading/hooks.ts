/* eslint-disable max-statements */
import { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import isNull from 'lodash/isNull'
import { load } from 'api/cv'
import { useIsSignedIn } from 'services/auth'
import {
  useFullName,
  usePosition,
  useAvatar,
  useAboutMe,
  useExperiences,
  useEducations,
  useContacts,
  useTechnologies,
  useLanguages,
} from 'services/cv'
import { selectIsLoading } from './selectors'
import { begin, complete } from './slice'

const useLoading = () => {
  const isLoading = useSelector(selectIsLoading)

  const dispatch = useDispatch()

  const handleBegin = useCallback(() => {
    dispatch(begin())
  }, [])

  const handleComplete = useCallback(() => {
    dispatch(complete())
  }, [])

  return {
    isLoading,
    handleBegin,
    handleComplete,
  }
}

const useLoadCV = () => {
  const isSignedIn = useIsSignedIn()

  const { handleBegin: beginLoading, handleComplete: completeLoading } =
    useLoading()
  const { handlePreset: presetFullName } = useFullName()
  const { handlePreset: presetPosition } = usePosition()
  const { handlePreset: presetAvatar } = useAvatar()
  const { handlePreset: presetAboutMe } = useAboutMe()
  const { handlePreset: presetExperiences } = useExperiences()
  const { handlePreset: presetEducations } = useEducations()
  const { handlePreset: presetContacts } = useContacts()
  const { handlePreset: presetTechnologies } = useTechnologies()
  const { handlePreset: presetLanguages } = useLanguages()

  useEffect(() => {
    if (!isSignedIn) {
      return
    }

    const loadCV = async () => {
      beginLoading()

      const cv = await load()

      if (isNull(cv)) {
        completeLoading()
        return
      }

      presetFullName({ fullName: cv.fullName })
      presetPosition({ position: cv.position })
      presetAvatar({ src: cv.avatar })
      presetAboutMe({ aboutMe: cv.aboutMe })
      presetExperiences({ experiences: cv.experiences })
      presetEducations({ educations: cv.educations })
      presetContacts({ contacts: cv.contacts })
      presetTechnologies({ technologies: cv.technologies })
      presetLanguages({ languages: cv.languages })

      completeLoading()
    }

    loadCV()
  }, [isSignedIn])
}

export { useLoadCV, useLoading }
