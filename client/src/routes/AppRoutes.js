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
  AuthPage,
} from '../pages'

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/auth" element={<AuthPage />} />
  </Routes>
)

export default AppRoutes
