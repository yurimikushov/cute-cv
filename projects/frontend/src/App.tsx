import { FC } from 'react'
import { useLoading } from 'services/app'
import { useLoadCV, useSaveCV } from 'services/cv'
import HomePage from 'pages/Home'
import Loader from 'components/Loader'

const App: FC = () => {
  useLoadCV()
  useSaveCV()

  const { isLoading } = useLoading()

  return (
    <>
      {isLoading && <Loader.FullScreen />}
      <HomePage />
    </>
  )
}

export default App
