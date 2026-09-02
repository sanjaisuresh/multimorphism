import React, { useState } from 'react'
import { Menu, Search, Bell, Settings, LogIn, LogOut, Check, X, AlertCircle, MessageSquare } from 'lucide-react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/store'
import { useTheme } from '@/providers/ThemeProvider'
import { AppLogo } from '@/components/layout/AppLogo'
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

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

  // Mock Notifications
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'New message from Sarah', desc: 'Hey, can we review the new designs?', time: '5m ago', unread: true, type: 'message', avatar: 'SL' },
    { id: 2, title: 'Server CPU spike', desc: 'Server #4 reached 89% CPU usage', time: '1hr ago', unread: true, type: 'alert' },
    { id: 3, title: 'Deployment successful', desc: 'v1.4.2 was deployed to production', time: '2hrs ago', unread: false, type: 'success' },
    { id: 4, title: 'Weekly report ready', desc: 'Your weekly analytics report is ready to view', time: '1d ago', unread: false, type: 'info' }
  ])

  const unreadCount = notifications.filter(n => n.unread).length

  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })))
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
          <Sheet>
            <SheetTrigger asChild>
              <button className="bg-bgbase rounded-full w-9 h-9 flex items-center justify-center text-gray-600 relative hover:shadow-inner transition-all duration-200">
                <Bell size={18} />
                {unreadCount > 0 && (
                  <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
                )}
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] flex flex-col p-0">
              <div className="p-6 pb-4 border-b border-gray-100 dark:border-white/5 flex items-center justify-between sticky top-0 bg-white/80 dark:bg-dark/80 backdrop-blur-md z-10">
                <SheetHeader className="text-left space-y-0">
                  <SheetTitle className="text-xl font-bold flex items-center gap-2">
                    Notifications 
                    {unreadCount > 0 && (
                      <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full">{unreadCount}</span>
                    )}
                  </SheetTitle>
                </SheetHeader>
                {unreadCount > 0 && (
                  <Button variant="ghost" size="sm" onClick={markAllRead} className="text-xs h-8 text-primary hover:text-primary-dark">
                    <Check size={14} className="mr-1" /> Mark all read
                  </Button>
                )}
              </div>
              
              <div className="flex-1 overflow-y-auto p-2">
                {notifications.length > 0 ? (
                  <div className="flex flex-col gap-1">
                    {notifications.map((notif) => (
                      <div key={notif.id} className={`p-4 rounded-xl flex gap-4 transition-colors cursor-pointer ${notif.unread ? 'bg-primary/5 hover:bg-primary/10' : 'hover:bg-gray-50 dark:hover:bg-white/5'}`}>
                        <div className="mt-1 flex-shrink-0">
                          {notif.avatar ? (
                            <Avatar className="w-10 h-10 border border-white/50 shadow-sm">
                              <AvatarFallback className="bg-primary/20 text-primary font-bold text-sm">{notif.avatar}</AvatarFallback>
                            </Avatar>
                          ) : (
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-sm ${
                              notif.type === 'alert' ? 'bg-red-100 text-red-600' :
                              notif.type === 'success' ? 'bg-green-100 text-green-600' :
                              'bg-blue-100 text-blue-600'
                            }`}>
                              {notif.type === 'alert' ? <AlertCircle size={20} /> :
                               notif.type === 'success' ? <Check size={20} /> :
                               <Bell size={20} />}
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className={`text-sm mb-1 ${notif.unread ? 'font-bold text-dark' : 'font-semibold text-gray-700'}`}>
                            {notif.title}
                          </h4>
                          <p className="text-sm text-gray-500 truncate">{notif.desc}</p>
                          <span className="text-xs text-gray-400 mt-2 block font-medium">{notif.time}</span>
                        </div>
                        {notif.unread && (
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-gray-400 p-8">
                    <Bell size={48} className="mb-4 opacity-20" />
                    <p className="font-medium text-center">You're all caught up!</p>
                  </div>
                )}
              </div>
              
              <div className="p-4 border-t border-gray-100 dark:border-white/5">
                <Button variant="outline" className="w-full shadow-clay-base hover:shadow-clay-inner">
                  View all notifications
                </Button>
              </div>
            </SheetContent>
          </Sheet>
          
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
