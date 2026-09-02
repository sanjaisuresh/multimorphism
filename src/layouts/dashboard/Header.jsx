import React, { useState } from 'react'
import { Menu, Search, Bell, Settings, LogIn, LogOut } from 'lucide-react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/store'
import { useTheme } from '@/providers/ThemeProvider'
import { AppLogo } from '@/components/layout/AppLogo'

const Header = observer(() => {
  const { authStore, layoutStore } = useStore()
  const { styles } = useTheme()
  const navigate = useNavigate()

  const handleLogout = () => {
    authStore.logout()
    navigate('/login')
  }

  const handleLogin = () => {
    navigate('/login')
  }

  const location = useLocation()
  let pageName = "Overview"
  if (location.pathname.includes("components")) pageName = "UI Components"
  else if (location.pathname.includes("settings")) pageName = "Settings"
  else if (location.pathname.includes("profile")) pageName = "Profile"

  return (
    <>
      <header className={styles.layout.header}>
        <div className="flex items-center gap-4 w-1/2">
          <button onClick={() => layoutStore.toggleSidebar()} className="md:hidden bg-bgbase rounded-xl w-9 h-9 flex items-center justify-center text-gray-600 flex-shrink-0">
            <Menu size={18} />
          </button>
          
          {layoutStore.themeLayout === 'horizontal' && (
            <div className="hidden md:flex">
              <AppLogo />
            </div>
          )}

          {layoutStore.breadCrumb && layoutStore.themeLayout !== 'horizontal' && (
             <div className="hidden md:flex items-center text-sm font-semibold text-gray-500 whitespace-nowrap mr-2">
                <Link to="/" className="hover:text-primary hover:underline transition-all">Dashboard</Link> &nbsp;&nbsp;/&nbsp;&nbsp; <span className="text-primary ml-2">{pageName}</span>
             </div>
          )}
          <div className="relative w-full max-w-md hidden sm:block">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="Search data, people, orgs..." 
              className="w-full bg-bgbase rounded-full py-2 pl-10 pr-4 outline-none text-sm focus:ring-2 focus:ring-primary shadow-inner text-gray-700 placeholder-gray-400"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 relative">
          <button className="bg-bgbase rounded-full w-9 h-9 flex items-center justify-center text-gray-600 relative hover:shadow-inner transition-all duration-200">
            <Bell size={18} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
          
          <Link 
            to="/settings"
            className="bg-bgbase rounded-full w-9 h-9 flex items-center justify-center transition-all duration-200 text-gray-600 hover:shadow-inner hover:text-primary"
          >
            <Settings size={18} />
          </Link>

          <Link to="/profile" className="w-9 h-9 rounded-full overflow-hidden ml-2 cursor-pointer shadow-sm block bg-bgbase flex items-center justify-center font-bold text-primary border-2 border-white">
            SS
          </Link>

          <button 
            onClick={authStore.isAuthenticated ? handleLogout : handleLogin}
            className="bg-bgbase rounded-full w-9 h-9 flex items-center justify-center transition-all duration-200 text-gray-600 hover:shadow-inner hover:text-primary ml-1"
            title={authStore.isAuthenticated ? "Logout" : "Login"}
          >
            {authStore.isAuthenticated ? <LogOut size={18} /> : <LogIn size={18} />}
          </button>
        </div>
      </header>
    </>
  )
})

export default Header
