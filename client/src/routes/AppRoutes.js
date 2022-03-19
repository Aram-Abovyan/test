// react
import React from 'react'
// react router
import {
  Routes,
  Route,
} from 'react-router-dom'
// pages
import {
  HomePage,
  AuthorizationPage,
  Test, // page for component testing
} from '../pages'

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/authorization" element={<AuthorizationPage />} />
    <Route path="/test" element={<Test />} />
  </Routes>
)

export default AppRoutes
