import React, { Suspense, useEffect, useReducer } from 'react'
import { ReactQueryDevtools as ReactQueryDevtoolsDevelopment } from '@tanstack/react-query-devtools'

const ReactQueryDevtoolsProduction = React.lazy(() => {
  return import('@tanstack/react-query-devtools/build/lib/index.prod.js').then(
    ({ ReactQueryDevtools }) => ({
      default: ReactQueryDevtools,
    })
  )
})

const ReactQueryDevtools = () => {
  const [isDevtoolsVisible, toggleDevtoolsVisibility] = useReducer(
    (prev) => !prev,
    false
  )

  useEffect(() => {
    // @ts-expect-error bad typing
    window.toggleReactQueryDevtools = toggleDevtoolsVisibility
  }, [])

  return (
    <>
      <ReactQueryDevtoolsDevelopment />
      {isDevtoolsVisible && (
        <Suspense fallback={null}>
          <ReactQueryDevtoolsProduction />
        </Suspense>
      )}
    </>
  )
}

export default ReactQueryDevtools
