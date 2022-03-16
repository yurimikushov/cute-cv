import { useState } from 'react'
import isNull from 'lodash/isNull'
import cvApi from 'api/cv'
import useEffectWhen from 'hooks/useEffectWhen'
import { useIsSignedIn } from 'services/auth'

const useIsThereCvOfUnsignedInUser = () => {
  const { isSignedIn } = useIsSignedIn()
  const [isThereCvOfUnsignedInUser, setIsThereCvOfUnsignedInUser] =
    useState(false)

  useEffectWhen(() => {
    const cv = cvApi.loadCvOfUnsignedInUser()

    if (isNull(cv)) {
      return
    }

    setIsThereCvOfUnsignedInUser(true)
  }, isSignedIn)

  return {
    isThereCvOfUnsignedInUser,
  }
}

export default useIsThereCvOfUnsignedInUser
