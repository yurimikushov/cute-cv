import { lazy, Suspense, FC } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Loader from 'shared/ui/Loader'

const HomePage = lazy(
  () => import(/* webpackChunkName: "HomePage" */ 'pages/HomePage')
)
const SharePage = lazy(
  () => import(/* webpackChunkName: "SharePage" */ 'pages/SharePage')
)

const App: FC = () => {
  return (
    <Suspense fallback={<Loader.FullScreen />}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/share/cv/:id' element={<SharePage />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
