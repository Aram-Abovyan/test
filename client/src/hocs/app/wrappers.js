// react hot loader
import { hot } from 'react-hot-loader/root'
// react
import React from 'react'
// react router
import { BrowserRouter } from 'react-router-dom'


const withHotReloader = (Component) => hot(Component)

const withRouter = (Component) => (...props) => {
  return (
    <BrowserRouter>
      <Component {...props} />
    </BrowserRouter>
  )
}

export const wrappers = [
  withHotReloader,
  withRouter,
]