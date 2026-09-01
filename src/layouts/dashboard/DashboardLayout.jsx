import { observer } from 'mobx-react-lite'
import { useStore } from '@/store'
import Sidebar from './Sidebar'
import Header from './Header'
import { useLocation, Link } from 'react-router-dom'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import { useTheme } from '@/providers/ThemeProvider'

const DashboardLayout = observer(({ children }) => {
  const { layoutStore } = useStore()
  const { themeLayout, themeStretch, sidebarOpen } = layoutStore

  const isHorizontal = themeLayout === 'horizontal'
  const { styles } = useTheme()
  const location = useLocation()

  let pageName = "Overview"
  if (location.pathname.includes("components")) pageName = "UI Components"
  else if (location.pathname.includes("settings")) pageName = "Settings"
  else if (location.pathname.includes("profile")) pageName = "Profile"

  return (
    <div className={styles.layout.app}>
      {!isHorizontal && <Sidebar />}
      
      {!isHorizontal && (
        <Sheet open={sidebarOpen} onOpenChange={(open) => layoutStore.setSidebarOpen(open)}>
          <SheetContent side="left" className="p-0 w-64 border-none bg-transparent shadow-none [&>button]:hidden">
            <Sidebar isMobile={true} />
          </SheetContent>
        </Sheet>
      )}

      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        <Header />
        {isHorizontal && (
          <div className={styles.layout.breadcrumb}>
             <Link to="/" className="hover:text-primary hover:underline transition-all">Dashboard</Link> &nbsp;&nbsp;/&nbsp;&nbsp; <span className="text-primary ml-2">{pageName}</span>
          </div>
        )}
        <main className="flex-1 overflow-y-auto p-6">
          <div className={`mx-auto w-full h-full transition-all duration-300 ${themeStretch ? 'max-w-full' : 'max-w-[1200px]'}`}>
            {children}
          </div>
        </main>
      </div>
    </div>
  )
})

export default DashboardLayout
