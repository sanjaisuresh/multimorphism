import { observer } from 'mobx-react-lite'
import { useStore } from '@/store'
import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import { useTheme } from '@/providers/ThemeProvider'

const DashboardLayout = observer(() => {
  const { layoutStore } = useStore()
  const { themeLayout, themeStretch, sidebarOpen } = layoutStore

  const isHorizontal = themeLayout === 'horizontal'
  const { styles } = useTheme()

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
        <main className="flex-1 overflow-y-auto p-6">
          <div className={`mx-auto w-full h-full transition-all duration-300 ${themeStretch ? 'max-w-full' : 'max-w-[1200px]'}`}>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
})

export default DashboardLayout
