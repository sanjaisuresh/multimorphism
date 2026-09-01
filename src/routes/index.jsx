import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import DashboardLayout from '@/layouts/dashboard/DashboardLayout'
import ComponentShowcase from '@/pages/components/ComponentShowcase'
import Dashboard from '@/pages/dashboard/Dashboard'
import Profile from '@/pages/profile/Profile'
import Settings from '@/pages/settings/Settings'

const AppRouter = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/components" element={<ComponentShowcase />} />
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  )
}

export default AppRouter
