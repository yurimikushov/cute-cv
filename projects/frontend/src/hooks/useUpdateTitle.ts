import { useEffect } from 'react'
import { useFullName } from 'services/cv'

const useUpdateTitle = () => {
  const { fullName } = useFullName()

  useEffect(() => {
    document.title = fullName || 'Cute CV'
  }, [fullName])
}

export default useUpdateTitle
