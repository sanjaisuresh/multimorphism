import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import DashboardLayout from '@/layouts/dashboard/DashboardLayout'
import ComponentShowcase from '@/pages/components/ComponentShowcase'
import Dashboard from '@/pages/dashboard/Dashboard'
import Profile from '@/pages/profile/Profile'
import Settings from '@/pages/settings/Settings'

import AuthLayout from '@/layouts/auth/AuthLayout'
import Login from '@/pages/auth/Login'
import Signup from '@/pages/auth/Signup'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/store'

const ProtectedRoute = observer(({ children }) => {
  const { authStore } = useStore()
  
  if (!authStore.isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return children
})

const AppRouter = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        {/* Dashboard Routes */}
        <Route element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/components" element={<ComponentShowcase />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
