/* eslint-disable max-statements */
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import isNull from 'lodash/isNull'
import { load, save } from 'api/cv'
import { useLoading } from 'services/app'
import { useFullName } from './name'
import { usePosition } from './position'
import { useAvatar } from './avatar'
import { useAboutMe } from './aboutMe'
import { useExperiences } from './experiences'
import { useEducations } from './educations'
import { useContacts } from './contacts'
import { useTechnologies } from './technologies'
import { useLanguages } from './languages'
import { selectCV } from './selector'

const useLoadCV = () => {
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
  }, [])
}
const useSaveCV = () => {
  const cv = useSelector(selectCV)

  useEffect(() => {
    const saveCV = async () => {
      await save(cv)
    }

    window.addEventListener('beforeunload', saveCV)

    return () => {
      window.removeEventListener('beforeunload', saveCV)
    }
  }, [cv])
}

export { useLoadCV, useSaveCV }
