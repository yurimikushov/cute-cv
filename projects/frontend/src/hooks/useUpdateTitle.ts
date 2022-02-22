import { useEffect } from 'react'
import { useCurrentCvContent } from 'services/cv'

const useUpdateTitle = () => {
  const {
    cv: { fullName },
  } = useCurrentCvContent()

  useEffect(() => {
    document.title = fullName || 'Cute CV'
  }, [fullName])
}

export default useUpdateTitle
