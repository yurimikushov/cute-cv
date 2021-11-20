import { FC } from 'react'
import { useLoadCV, useSaveCV, useLoading } from 'services/app'
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

  const isSignInChecking = useIsSignInChecking()
  const { isLoading } = useLoading()

  return (
    <>
      {(isSignInChecking || isLoading) && <Loader.FullScreen />}
      <HomePage />
    </>
  )
}

export default App
