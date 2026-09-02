import React from 'react'
import { Outlet } from 'react-router-dom'
import ClayBanner from '@/pages/auth/components/ClayBanner'
import { ThemeConfigurator } from '@/components/theme/ThemeConfigurator'
import { useTheme } from '@/providers/ThemeProvider'
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet'
import { Settings } from 'lucide-react'

const AuthLayout = () => {
  const { styles } = useTheme()

  return (
    <div className={`relative grid min-h-svh lg:grid-cols-2 bg-bgbase ${styles.globals}`}>
      {/* Left Column: Form */}
      <div className="flex flex-col gap-4 p-6 md:p-10 relative z-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-sm">
            <Outlet />
          </div>
        </div>
      </div>

      {/* Right Column: Banner (hidden on mobile) */}
      <div className="relative hidden bg-gray-50 lg:block overflow-hidden shadow-inner">
        <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-br from-white/10 to-transparent"></div>
        <ClayBanner />
        
        {/* Optional Branding Overlay */}
        <div className="absolute bottom-10 left-10 z-20 pointer-events-none">
          <h2 className="text-4xl font-extrabold text-white drop-shadow-lg mix-blend-overlay opacity-80">Multimorphism</h2>
          <p className="text-lg text-white/90 drop-shadow-md font-medium mt-2">Dynamic. Adaptive. Beautiful.</p>
        </div>
      </div>

      {/* Theme Settings Toggle (Top Right) */}
      <div className="absolute top-4 right-4 z-50">
        <Sheet>
          <SheetTrigger asChild>
            <button className="bg-bgbase rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 text-gray-600 hover:shadow-inner hover:text-primary shadow-sm border border-gray-200">
              <Settings size={20} />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[400px] sm:w-[540px] overflow-y-auto">
            <SheetHeader className="mb-6">
              <SheetTitle>Theme Settings</SheetTitle>
              <SheetDescription>
                Customize the look and feel of your app instantly.
              </SheetDescription>
            </SheetHeader>
            <ThemeConfigurator />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

export default AuthLayout
