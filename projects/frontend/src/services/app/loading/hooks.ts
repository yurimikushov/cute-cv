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
import { begin, success, fail } from './slice'
import { FailPayloadT } from './model'

const useLoading = () => {
  const isLoading = useSelector(selectIsLoading)

  const dispatch = useDispatch()

  const handleBegin = useCallback(() => {
    dispatch(begin())
  }, [])

  const handleSuccess = useCallback(() => {
    dispatch(success())
  }, [])

  const handleFail = useCallback((payload: FailPayloadT) => {
    dispatch(fail(payload))
  }, [])

  return {
    isLoading,
    handleBegin,
    handleSuccess,
    handleFail,
  }
}

const useLoadCV = () => {
  const { isSignedIn } = useIsSignedIn()

  const {
    handleBegin: begin,
    handleSuccess: success,
    handleFail: fail,
  } = useLoading()
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
      begin()

      const either = await load()

      either
        .mapRight((cv) => {
          if (isNull(cv)) {
            success()
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

          success()
        })
        .mapLeft((error) => {
          fail({ error })
        })
    }

    loadCV()
  }, [isSignedIn])
}

export { useLoadCV, useLoading }
