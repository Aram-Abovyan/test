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
  WorkspacePage,
  LoginPage,
  RegisterPage,
  Test, // page for component testing
} from '../pages'

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/workspace" element={<WorkspacePage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/test" element={<Test />} />
  </Routes>
)

export default AppRoutes
