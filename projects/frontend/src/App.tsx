import { FC } from 'react'
import { useLoadCV, useSaveCV, useLoading } from 'services/app'
import { useLoadUser } from 'services/auth'
import { useUpdateLangAttr, useUpdateTitle } from 'hooks'
import HomePage from 'pages/HomePage'
import Loader from 'components/Loader'

const App: FC = () => {
  useLoadUser()
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
