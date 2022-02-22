import { FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { useAuth, useIsSignInChecking } from 'services/auth'
import { useConnectCV, useCurrentCvContent, useIsCVLoading } from 'services/cv'
import { useUpdateLangAttr } from 'hooks'
import HomePage from 'pages/HomePage'
import Loader from 'components/Loader'

const App: FC = () => {
  useAuth()
  useConnectCV()
  useUpdateLangAttr()

  const {
    cv: { fullName },
  } = useCurrentCvContent()
  const { isSignInChecking } = useIsSignInChecking()
  const { isCVLoading } = useIsCVLoading()

  return (
    <>
      <Helmet>
        <title>{fullName || 'Cute CV'} </title>
      </Helmet>
      {(isSignInChecking || isCVLoading) && <Loader.FullScreen />}
      <HomePage />
    </>
  )
}

export default App
