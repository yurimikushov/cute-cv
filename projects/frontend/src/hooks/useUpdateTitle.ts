import { useEffect } from 'react'
import { useFullName } from 'services/cv'

const useUpdateTitle = () => {
  const { fullName } = useFullName()

  useEffect(() => {
    document.title = fullName || 'CV editor'
  }, [fullName])
}

export default useUpdateTitle
