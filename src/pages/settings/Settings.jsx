import React from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/store'
import { TypographyH2, TypographyH3, TypographyP } from '@/components/ui/typography'
import { Card } from '@/components/ui/card'
import { LayoutTemplate, LayoutPanelLeft, List } from 'lucide-react'
import { useTheme } from '@/providers/ThemeProvider'
import { ThemeConfigurator } from '@/components/theme/ThemeConfigurator'

const SettingsPage = observer(() => {
  const { themeStore, layoutStore } = useStore()
  const { themeName, setTheme, styles } = useTheme()
  const sStyles = styles.settings || {}

  const presets = [
    { name: 'yellow', color: '#FFDF00' },
    { name: 'cyan', color: '#078DEE' },
    { name: 'blue', color: '#1890FF' },
    { name: 'purple', color: '#A855F7' },
    { name: 'green', color: '#22C55E' },
    { name: 'orange', color: '#FA541C' },
    { name: 'red', color: '#F5222D' },
  ]

  const fonts = ['Outfit', 'Inter', 'Roboto', 'Open Sans']

  return (
    <div className={`p-6 md:p-8 flex flex-col gap-8 mx-auto w-full animate-fade-in ${layoutStore.themeStretch ? 'max-w-none' : 'max-w-5xl'}`}>
      <div className="flex flex-col gap-2">
        <TypographyH2>Settings</TypographyH2>
        <TypographyP>Customize your Claymorphism workspace experience.</TypographyP>
      </div>

      <ThemeConfigurator inSettings={true} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Layout Settings */}
        <Card className="flex flex-col gap-8">
          <TypographyH3>Layout</TypographyH3>
          
          {/* Layout Mode */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 mb-3">Sidebar Style</h3>
            <div className="flex gap-4">
              <button 
                onClick={() => layoutStore.setThemeLayout('vertical')}
                className={`flex-1 h-16 flex items-center justify-center transition-all ${layoutStore.themeLayout === 'vertical' ? sStyles.btnActive : sStyles.btnInactive}`}
                title="Vertical"
              >
                <LayoutPanelLeft size={20} />
              </button>
              <button 
                onClick={() => layoutStore.setThemeLayout('mini')}
                className={`flex-1 h-16 flex items-center justify-center transition-all ${layoutStore.themeLayout === 'mini' ? sStyles.btnActive : sStyles.btnInactive}`}
                title="Mini"
              >
                <List size={20} />
              </button>
              <button 
                onClick={() => layoutStore.setThemeLayout('horizontal')}
                className={`flex-1 h-16 flex items-center justify-center transition-all ${layoutStore.themeLayout === 'horizontal' ? sStyles.btnActive : sStyles.btnInactive}`}
                title="Horizontal"
              >
                <LayoutTemplate size={20} />
              </button>
            </div>
          </div>

          {/* Page Config Switches */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-dark">Stretch Content</h3>
                <p className="text-xs text-gray-500">Allow pages to stretch to full width</p>
              </div>
              <div 
                className={`w-12 h-6 rounded-full relative flex items-center cursor-pointer transition-colors ${layoutStore.themeStretch ? sStyles.switchTrackActive : sStyles.switchTrackInactive}`}
                onClick={() => layoutStore.setThemeStretch(!layoutStore.themeStretch)}
              >
                <div className={`w-4 h-4 rounded-full absolute shadow-sm transition-all ${themeName === 'neobrutalism' ? 'bg-black rounded-none border-2 border-black w-3 h-5' : 'bg-white'} ${layoutStore.themeStretch ? 'right-1' : 'left-1'}`}></div>
              </div>
            </div>


            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-dark">Breadcrumb</h3>
                <p className="text-xs text-gray-500">Show page breadcrumb navigation</p>
              </div>
              <div 
                className={`w-12 h-6 rounded-full relative flex items-center cursor-pointer transition-colors ${layoutStore.breadCrumb ? sStyles.switchTrackActive : sStyles.switchTrackInactive}`}
                onClick={() => layoutStore.setBreadCrumb(!layoutStore.breadCrumb)}
              >
                <div className={`w-4 h-4 rounded-full absolute shadow-sm transition-all ${themeName === 'neobrutalism' ? 'bg-black rounded-none border-2 border-black w-3 h-5' : 'bg-white'} ${layoutStore.breadCrumb ? 'right-1' : 'left-1'}`}></div>
              </div>
            </div>
          </div>
        </Card>

        {/* Typography Settings */}
        <Card className="flex flex-col gap-8 md:col-span-2">
          <TypographyH3>Typography</TypographyH3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Fonts */}
            <div>
              <h3 className="text-sm font-semibold text-gray-500 mb-3">Font Family</h3>
              <div className="flex flex-col gap-3">
                {fonts.map(font => (
                  <button 
                    key={font}
                    onClick={() => themeStore.setFontFamily(font)} 
                    className={`text-left text-sm py-4 transition-all ${themeStore.fontFamily === font ? sStyles.fontActive : sStyles.fontInactive}`}
                  >
                    {font}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Font Size Slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-500">Global Font Size</h3>
                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-md">{themeStore.fontSize}px</span>
              </div>
              <input 
                type="range" 
                min="12" 
                max="20" 
                value={themeStore.fontSize} 
                onChange={(e) => themeStore.setFontSize(parseInt(e.target.value))}
                className={`w-full appearance-none cursor-pointer mt-2 ${sStyles.sliderTrack}`}
              />
              <TypographyP className="mt-6 text-sm text-center">
                Use the slider to scale the entire interface up or down.
              </TypographyP>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
})

export default SettingsPage
