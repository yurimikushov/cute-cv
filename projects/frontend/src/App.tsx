import { FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { useAuth, useIsSignInChecking } from 'services/auth'
import { useConnectCV, useCurrentCvContent, useIsCVLoading } from 'services/cv'
import HomePage from 'pages/HomePage'
import Loader from 'components/Loader'

const App: FC = () => {
  useAuth()
  useConnectCV()

  const {
    i18n: { language: lang },
  } = useTranslation()
  const {
    cv: { fullName },
  } = useCurrentCvContent()
  const { isSignInChecking } = useIsSignInChecking()
  const { isCVLoading } = useIsCVLoading()

  return (
    <>
      <Helmet htmlAttributes={{ lang }}>
        <title>{fullName || 'Cute CV'} </title>
      </Helmet>
      {(isSignInChecking || isCVLoading) && <Loader.FullScreen />}
      <HomePage />
    </>
  )
}

export default App
