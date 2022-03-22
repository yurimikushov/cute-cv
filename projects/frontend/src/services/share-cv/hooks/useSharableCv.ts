import { useEffect, useState } from 'react'
import cvApi from 'api/cv'

type Cv = Awaited<ReturnType<typeof cvApi.loadSharable>>

const useSharableCv = (id: string) => {
  const [isLoading, setIsLoading] = useState(true)
  const [cv, setCv] = useState<Cv | null>(null)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    ;(async () => {
      setIsLoading(true)
      setError(null)

      try {
        const cv = await cvApi.loadSharable(id)
        setCv(cv)
      } catch (err) {
        setError(err as Error)
      }

      setIsLoading(false)
    })()
  }, [id])

  return {
    isLoading,
    cv,
    error,
  }
}

export default useSharableCv
