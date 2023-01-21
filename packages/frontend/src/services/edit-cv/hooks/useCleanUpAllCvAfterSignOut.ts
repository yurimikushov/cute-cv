import { useEffect, useRef } from 'react'
import { useAuth } from 'services/auth'
import { useAllCv, useAddCv, useDeleteCv } from '../stores/all-cv-store'
import { useCurrentCvId } from '../stores/current-cv-id-store'
// import { useAddEmptyCv, useDeleteCv, useSelectCv } from '../versions'

const useCleanUpAllCvAfterSignOut = () => {
  const { isSignedIn } = useAuth()
  const isSignInPrevRef = useRef(isSignedIn)
  const { data: allCv } = useAllCv({ skip: !isSignedIn })
  const { updateCurrentId } = useCurrentCvId()
  const { addCv } = useAddCv()
  const { deleteCv } = useDeleteCv()

  useEffect(() => {
    const { current: isSignInPrev } = isSignInPrevRef

    if (!isSignInPrev || isSignedIn) {
      isSignInPrevRef.current = isSignedIn
      return
    }

    const { id: newCvId } = addCv('New', false)
    updateCurrentId(newCvId)

    allCv?.forEach(({ id }) => {
      deleteCv(id)
    })
  }, [isSignedIn])
}

export default useCleanUpAllCvAfterSignOut
