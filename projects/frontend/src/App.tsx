import { FC } from 'react'
import { useLoadCV, useSaveCV, useIsCVLoading } from 'services/app'
import { useAuth, useIsSignInChecking } from 'services/auth'
import { useUpdateLangAttr, useUpdateTitle } from 'hooks'
import HomePage from 'pages/HomePage'
import Loader from 'components/Loader'

const App: FC = () => {
  useAuth()
  useLoadCV()
  useSaveCV()
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
