import React from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/store'
import { TypographyH3, TypographyP } from '@/components/ui/typography'
import { Card } from '@/components/ui/card'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/providers/ThemeProvider'

export const ThemeConfigurator = observer(({ inSettings = false }) => {
  const { themeStore } = useStore()
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

  // If the current color is a hex, it won't match any preset name perfectly, so we treat it as custom
  const isCustomColor = themeStore.themeColorPresets.startsWith('#')

  const handleCustomColorChange = (e) => {
    themeStore.setThemeColorPresets(e.target.value)
  }

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Design Style Section - Extracted to Top */}
      <div className="flex flex-col gap-4 mb-2">
        <TypographyH3>Design Style</TypographyH3>
        <TypographyP className="text-sm text-gray-500 -mt-2 mb-2">Select your UI aesthetic. Each button previews its own style!</TypographyP>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {/* Claymorphism Preview */}
          <button 
            onClick={() => {
              setTheme('claymorphism')
              themeStore.setThemeColorPresets('blue')
            }}
            className={`h-20 flex items-center justify-center transition-all bg-clay rounded-2xl shadow-[5px_5px_10px_#0b1121,-5px_-5px_10px_#314155,inset_2px_2px_4px_rgba(255,255,255,0.1)] hover:scale-105 ${themeName === 'claymorphism' ? 'ring-2 ring-primary ring-offset-2 ring-offset-bgbase' : ''}`}
          >
            <span className="font-semibold text-sm text-primary">Claymorphism</span>
          </button>
          
          {/* Neo-Brutalism Preview */}
          <button 
            onClick={() => {
              setTheme('neobrutalism')
              themeStore.setThemeColorPresets('yellow')
            }}
            className={`h-20 flex items-center justify-center transition-all bg-[#FFDF00] border-4 border-black text-black font-bold uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none ${themeName === 'neobrutalism' ? 'outline outline-4 outline-black outline-offset-4' : ''}`}
          >
            <span className="text-sm">Neo-Brutalism</span>
          </button>
          
          {/* Glassmorphism Preview */}
          <button 
            onClick={() => {
              setTheme('glassmorphism')
              themeStore.setThemeColorPresets('purple')
            }}
            className={`h-20 flex items-center justify-center transition-all bg-white/40 dark:bg-white/10 backdrop-blur-md rounded-2xl border border-white/60 dark:border-white/20 shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:bg-white/60 hover:-translate-y-1 ${themeName === 'glassmorphism' ? 'ring-2 ring-white ring-offset-2 ring-offset-bgbase' : ''}`}
          >
            <span className="font-semibold text-sm text-gray-800 dark:text-gray-100 drop-shadow-sm">Glassmorphism</span>
          </button>
          
          {/* Neumorphism Preview */}
          <button 
            onClick={() => {
              setTheme('neumorphism')
              themeStore.setThemeColorPresets('cyan')
            }}
            className={`h-20 flex items-center justify-center transition-all bg-[#e0e5ec] dark:bg-[#1a1b1e] rounded-2xl shadow-[8px_8px_16px_#b8bcc2,-8px_-8px_16px_#ffffff] dark:shadow-[8px_8px_16px_#0d0e0f,-8px_-8px_16px_#27282d] hover:shadow-[inset_8px_8px_16px_#b8bcc2,inset_-8px_-8px_16px_#ffffff] dark:hover:shadow-[inset_8px_8px_16px_#0d0e0f,inset_-8px_-8px_16px_#27282d] ${themeName === 'neumorphism' ? 'ring-2 ring-primary ring-offset-2 ring-offset-bgbase' : ''}`}
          >
            <span className="font-semibold text-sm text-[#4a5568] dark:text-[#a0aec0]">Neumorphism</span>
          </button>

          {/* Retro/Cyberpunk Preview */}
          <button 
            onClick={() => {
              setTheme('retro')
              themeStore.setThemeColorPresets('green')
              themeStore.setThemeMode('dark') // Cyberpunk is best in dark mode
            }}
            className={`h-20 flex items-center justify-center transition-all bg-[#09090b] rounded-2xl border-2 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5),inset_0_0_10px_rgba(6,182,212,0.2)] hover:bg-[#131316] ${themeName === 'retro' ? 'ring-2 ring-cyan-400 ring-offset-2 ring-offset-bgbase scale-105' : ''}`}
          >
            <span className="font-bold text-sm text-cyan-400 tracking-wider" style={{ textShadow: '0 0 8px rgba(6,182,212,0.8)' }}>RETRO</span>
          </button>
          
          {/* Bauhaus/Minimalist Preview */}
          <button 
            onClick={() => {
              setTheme('bauhaus')
              themeStore.setThemeColorPresets('red')
            }}
            className={`h-20 flex items-center justify-center transition-all bg-white dark:bg-black rounded-none border-l-8 border-red-500 shadow-sm hover:shadow-md hover:translate-x-1 ${themeName === 'bauhaus' ? 'ring-1 ring-black dark:ring-white ring-offset-4 ring-offset-bgbase' : ''}`}
          >
            <span className="font-bold text-sm text-black dark:text-white uppercase tracking-widest font-sans">Bauhaus</span>
          </button>

          {/* Bento Box Preview */}
          <button 
            onClick={() => {
              setTheme('bento')
              themeStore.setThemeColorPresets('blue')
            }}
            className={`h-20 flex items-center justify-center transition-all bg-[#F2F2F7] dark:bg-[#1C1C1E] rounded-[2rem] border border-black/5 dark:border-white/5 shadow-sm hover:shadow-md hover:scale-105 ${themeName === 'bento' ? 'ring-2 ring-primary ring-offset-2 ring-offset-bgbase' : ''}`}
          >
            <span className="font-semibold text-sm text-black dark:text-white">Bento Box</span>
          </button>

          {/* Material You Preview */}
          <button 
            onClick={() => {
              setTheme('material')
              themeStore.setThemeColorPresets('green')
            }}
            className={`h-20 flex items-center justify-center transition-all bg-[#F3F4E9] dark:bg-[#2F3127] rounded-full shadow-sm hover:bg-[#E8E9DB] dark:hover:bg-[#3F4135] ${themeName === 'material' ? 'ring-2 ring-[#76786A] dark:ring-[#909281] ring-offset-2 ring-offset-bgbase' : ''}`}
          >
            <span className="font-medium text-sm text-[#1C1C17] dark:text-[#E6E2D9]">Material You</span>
          </button>

          {/* Aurora Preview */}
          <button 
            onClick={() => {
              setTheme('aurora')
              themeStore.setThemeColorPresets('purple')
            }}
            className={`h-20 flex items-center justify-center transition-all bg-gradient-to-br from-purple-400/30 to-blue-400/30 backdrop-blur-xl rounded-[2rem] border border-white/40 shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] ${themeName === 'aurora' ? 'ring-2 ring-white ring-offset-2 ring-offset-bgbase scale-105' : ''}`}
          >
            <span className="font-bold text-sm text-white drop-shadow-md">Aurora</span>
          </button>

          {/* Frutiger Aero Preview */}
          <button 
            onClick={() => {
              setTheme('frutigeraero')
              themeStore.setThemeColorPresets('cyan')
            }}
            className={`h-20 flex items-center justify-center transition-all bg-gradient-to-b from-white to-[#E0F2FE] dark:from-[#1A2E44] dark:to-[#112233] rounded-full border border-white/50 shadow-[inset_0_2px_10px_rgba(255,255,255,0.8),0_4px_10px_rgba(0,0,0,0.1)] hover:scale-105 ${themeName === 'frutigeraero' ? 'ring-2 ring-cyan-500 ring-offset-2 ring-offset-bgbase' : ''}`}
          >
            <span className="font-bold text-sm text-[#033A52] dark:text-[#E0F2FE]">Frutiger Aero</span>
          </button>

          {/* Skeuomorphism Preview */}
          <button 
            onClick={() => {
              setTheme('skeuomorphism')
              themeStore.setThemeColorPresets('orange')
            }}
            className={`h-20 flex items-center justify-center transition-all bg-gradient-to-b from-[#ffffff] to-[#e6e6e6] dark:from-[#333333] dark:to-[#1a1a1a] rounded-xl border border-[#cccccc] dark:border-[#111111] shadow-[inset_0_1px_0_rgba(255,255,255,1),0_4px_6px_rgba(0,0,0,0.2)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_4px_6px_rgba(0,0,0,0.6)] active:translate-y-1 active:shadow-[inset_0_4px_6px_rgba(0,0,0,0.2)] ${themeName === 'skeuomorphism' ? 'ring-2 ring-orange-500 ring-offset-2 ring-offset-bgbase' : ''}`}
          >
            <span className="font-bold text-sm text-[#333333] dark:text-[#cccccc] text-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">Skeuomorph</span>
          </button>

          {/* Wireframe Preview */}
          <button 
            onClick={() => {
              setTheme('wireframe')
              themeStore.setThemeColorPresets('cyan')
            }}
            className={`h-20 flex items-center justify-center transition-all bg-transparent rounded-none border-2 border-dashed border-[#000000] dark:border-[#ffffff] hover:bg-black/5 dark:hover:bg-white/5 ${themeName === 'wireframe' ? 'ring-2 ring-[#000000] dark:ring-[#ffffff] ring-offset-4 ring-offset-bgbase' : ''}`}
          >
            <span className="font-bold font-mono uppercase text-sm tracking-widest text-[#000000] dark:text-[#ffffff]">Wireframe</span>
          </button>

          {/* Monochrome Preview */}
          <button 
            onClick={() => {
              setTheme('monochrome')
              themeStore.setThemeColorPresets('blue')
            }}
            className={`h-20 flex items-center justify-center transition-all bg-white dark:bg-black rounded-none border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black group ${themeName === 'monochrome' ? 'ring-2 ring-black dark:ring-white ring-offset-2 ring-offset-bgbase' : ''}`}
          >
            <span className="font-bold text-sm text-black dark:text-white group-hover:text-white dark:group-hover:text-black uppercase">Monochrome</span>
          </button>

          {/* Memphis Preview */}
          <button 
            onClick={() => {
              setTheme('memphis')
              themeStore.setThemeColorPresets('yellow')
            }}
            className={`h-20 flex items-center justify-center transition-all bg-[#ff6b6b] rounded-tl-[1.5rem] rounded-br-[1.5rem] border-4 border-black shadow-[4px_4px_0_0_#000000] hover:-translate-y-1 hover:translate-x-1 hover:shadow-[6px_6px_0_0_#000000] ${themeName === 'memphis' ? 'ring-2 ring-black ring-offset-4 ring-offset-bgbase' : ''}`}
          >
            <span className="font-black text-sm text-white uppercase tracking-wider">Memphis</span>
          </button>
        </div>
      </div>

      {/* Appearance Config Card */}
      <Card className="flex flex-col gap-8 w-full">
        {inSettings && <TypographyH3>Appearance</TypographyH3>}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Theme Mode */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 mb-3">Mode</h3>
            <div className="flex gap-4">
              <button 
                onClick={() => themeStore.setThemeMode('light')}
                className={`flex-1 h-20 flex items-center justify-center transition-all ${themeStore.themeMode === 'light' ? sStyles.btnActive : sStyles.btnInactive}`}
              >
                <Sun size={24} />
              </button>
              <button 
                onClick={() => themeStore.setThemeMode('dark')}
                className={`flex-1 h-20 flex items-center justify-center transition-all ${themeStore.themeMode === 'dark' ? sStyles.btnActive : sStyles.btnInactive}`}
              >
                <Moon size={24} />
              </button>
            </div>
          </div>

          {/* Colors */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 mb-3">Color Presets</h3>
            <div className="flex flex-wrap gap-4 items-center">
              {presets.map(p => (
                <button 
                  key={p.name}
                  onClick={() => themeStore.setThemeColorPresets(p.name)} 
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${themeStore.themeColorPresets === p.name ? sStyles.colorActive : sStyles.colorInactive}`}
                  style={{ backgroundColor: p.color }}
                  title={p.name}
                />
              ))}
              
              {/* Dynamic Color Picker */}
              <div 
                className={`w-12 h-12 rounded-full overflow-hidden flex items-center justify-center transition-all relative cursor-pointer ${isCustomColor ? sStyles.colorActive : sStyles.colorInactive}`}
                style={{ backgroundColor: isCustomColor ? themeStore.themeColorPresets : '#ffffff' }}
                title="Custom Color"
              >
                <input
                  type="color"
                  value={isCustomColor ? themeStore.themeColorPresets : '#ffffff'}
                  onChange={handleCustomColorChange}
                  className="opacity-0 w-[200%] h-[200%] absolute cursor-pointer"
                />
                {!isCustomColor && (
                  <div className="w-full h-full bg-gradient-to-br from-red-500 via-green-500 to-blue-500 rounded-full" />
                )}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
})
