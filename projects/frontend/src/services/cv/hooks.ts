import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import isNull from 'lodash/isNull'
import { load, save } from 'api/cv'
import { useFullName } from './name'
import { usePosition } from './position'
import { useAvatar } from './avatar'
import { useAboutMe } from './aboutMe'
import { selectCV } from './selector'

const useLoadCV = () => {
  const { handlePreset: presetFullName } = useFullName()
  const { handlePreset: presetPosition } = usePosition()
  const { handlePreset: presetAvatar } = useAvatar()
  const { handlePreset: presetAboutMe } = useAboutMe()

  useEffect(() => {
    const loadCV = async () => {
      // TODO: should dispatch(loading(true))

      const cv = await load()

      if (isNull(cv)) {
        return
      }

      presetFullName({ fullName: cv.fullName })
      presetPosition({ position: cv.position })
      presetAvatar({ src: cv.avatar })
      presetAboutMe({ aboutMe: cv.aboutMe })

      // TODO: should dispatch(loading(false))
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
