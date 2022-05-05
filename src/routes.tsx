import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ApplicationLayout from './layouts/application'

const RouteElement = (children:JSX.Element) => {
  return <React.Suspense fallback={'loading...'}>{children}</React.Suspense>
}

const IndexPage = React.lazy(() => import('./pages'))

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ApplicationLayout />}>
        <Route index element={RouteElement(<IndexPage />)} />
      </Route>
    </Routes>
  )
}
export default AppRouter
