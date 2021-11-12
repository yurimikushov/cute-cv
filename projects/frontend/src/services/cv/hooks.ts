import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { save } from 'api/cv'
import { selectCV } from './selector'

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

export { useSaveCV }
