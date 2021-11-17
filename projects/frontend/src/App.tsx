import { FC } from 'react'
import { useLoadCV, useSaveCV, useLoading } from 'services/app'
import { useUpdateLangAttr, useUpdateTitle } from 'hooks'
import HomePage from 'pages/HomePage'
import Loader from 'components/Loader'

const App: FC = () => {
  useLoadCV()
  useSaveCV()
  useUpdateLangAttr()
  useUpdateTitle()

  const { isLoading } = useLoading()

  return (
    <>
      {isLoading && <Loader.FullScreen />}
      <HomePage />
    </>
  )
}

export default App
