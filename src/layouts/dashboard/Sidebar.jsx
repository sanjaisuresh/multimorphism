import { observer } from 'mobx-react-lite'
import { useStore } from '@/store'
import { Database, Home, Zap, Layers, User } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { useTheme } from '@/providers/ThemeProvider'
import { cn } from '@/utils'

const Sidebar = observer(({ isMobile = false }) => {
  const { layoutStore } = useStore()
  const { themeLayout } = layoutStore
  
  const { styles } = useTheme()
  const isMini = themeLayout === 'mini'

  const navLinkClass = ({ isActive }) => 
    cn(
      "flex items-center gap-3 p-3 rounded-xl transition-all duration-200",
      isMini && !isMobile ? 'justify-center' : 'px-4',
      isActive ? styles.layout.sidebar.linkActive : styles.layout.sidebar.linkInactive
    )

  return (
    <aside className={cn(styles.layout.sidebar.container, `${isMobile ? 'flex' : 'hidden md:flex'} ${isMini && !isMobile ? 'w-20' : 'w-64'}`)}>
      <div className={`flex flex-col h-full p-5 ${isMini && !isMobile ? 'items-center px-2' : ''}`}>
        <div className={`flex items-center gap-3 mb-8 mt-2 ${isMini && !isMobile ? 'justify-center' : 'px-2'}`}>
          <div className="w-9 h-9 bg-clay rounded-xl shadow-clay-btn flex items-center justify-center text-primary flex-shrink-0">
            <Database size={20} />
          </div>
          {(!isMini || isMobile) && <h1 className="text-xl font-bold tracking-tight text-dark whitespace-nowrap">DataTool</h1>}
        </div>

        <nav className="flex-1 flex flex-col gap-2 w-full">
          <NavLink to="/dashboard" className={navLinkClass}>
            <Home size={18} />
            {(!isMini || isMobile) && <span>Dashboard</span>}
          </NavLink>
          <NavLink to="/profile" className={navLinkClass}>
            <User size={18} />
            {(!isMini || isMobile) && <span>Profile</span>}
          </NavLink>
          <NavLink to="/components" className={navLinkClass}>
            <Layers size={18} />
            {(!isMini || isMobile) && <span>UI Components</span>}
          </NavLink>
        </nav>

        {(!isMini || isMobile) && (
          <div className="mt-auto pt-6 w-full">
            <div className="bg-clay rounded-2xl shadow-clay-base p-4">
              <div className="flex items-center gap-2 mb-2">
                <Zap size={18} className="text-primary" />
                <span className="font-semibold text-sm">Pro Plan</span>
              </div>
              <p className="text-xs text-gray-500 mb-3 leading-tight">Unlock unlimited AI enrichments & credits.</p>
              <button className="w-full py-2.5 text-sm font-semibold bg-primary text-white rounded-xl shadow-clay-primary active:shadow-inner transition-all duration-200">Upgrade</button>
            </div>
          </div>
        )}
      </div>
    </aside>
  )
})

export default Sidebar
