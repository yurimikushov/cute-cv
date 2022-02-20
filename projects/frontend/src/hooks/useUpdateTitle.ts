import { useEffect } from 'react'
import { useCvContent } from 'services/cv'

const useUpdateTitle = () => {
  const {
    cv: { fullName },
  } = useCvContent()

  useEffect(() => {
    document.title = fullName || 'Cute CV'
  }, [fullName])
}

export default useUpdateTitle
