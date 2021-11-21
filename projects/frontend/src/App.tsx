import { FC } from 'react'
import { useAuth, useIsSignInChecking } from 'services/auth'
import { useConnectCV, useIsCVLoading } from 'services/cv'
import { useUpdateLangAttr, useUpdateTitle } from 'hooks'
import HomePage from 'pages/HomePage'
import Loader from 'components/Loader'

const App: FC = () => {
  useAuth()
  useConnectCV()
  useUpdateLangAttr()
  useUpdateTitle()

  const { isSignInChecking } = useIsSignInChecking()
  const { isCVLoading } = useIsCVLoading()

  return (
    <>
      {(isSignInChecking || isCVLoading) && <Loader.FullScreen />}
      <HomePage />
    </>
  )
}

export default App
