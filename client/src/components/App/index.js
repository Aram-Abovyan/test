// react
import React from 'react'
// hocs
import wrapApp from '../../hocs/app'
// routes
import { AppRoutes } from '../../routes'

const App = () => {
  return (
    <AppRoutes />
  )
}

export default wrapApp(App)