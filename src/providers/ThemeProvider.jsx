import React, { createContext, useContext, useState, useEffect } from 'react'
import { useStore } from '@/store'
import { claymorphismTheme } from '@/styles/themes/claymorphism'
import { neobrutalismTheme } from '@/styles/themes/neobrutalism'
import { glassmorphismTheme } from '@/styles/themes/glassmorphism'
import { neumorphismTheme } from '@/styles/themes/neumorphism'
import { retroTheme } from '@/styles/themes/retro'
import { bauhausTheme } from '@/styles/themes/bauhaus'
import { bentoTheme } from '@/styles/themes/bento'
import { materialTheme } from '@/styles/themes/material'
import { auroraTheme } from '@/styles/themes/aurora'
import { frutigeraeroTheme } from '@/styles/themes/frutigeraero'
import { skeuomorphismTheme } from '@/styles/themes/skeuomorphism'
import { wireframeTheme } from '@/styles/themes/wireframe'
import { monochromeTheme } from '@/styles/themes/monochrome'
import { memphisTheme } from '@/styles/themes/memphis'
import { spatialTheme } from '@/styles/themes/spatial'
import { pixelTheme } from '@/styles/themes/pixel'
import { holographicTheme } from '@/styles/themes/holographic'
import { organicTheme } from '@/styles/themes/organic'

const THEMES = {
  claymorphism: claymorphismTheme,
  neobrutalism: neobrutalismTheme,
  glassmorphism: glassmorphismTheme,
  neumorphism: neumorphismTheme,
  retro: retroTheme,
  bauhaus: bauhausTheme,
  bento: bentoTheme,
  material: materialTheme,
  aurora: auroraTheme,
  frutigeraero: frutigeraeroTheme,
  skeuomorphism: skeuomorphismTheme,
  wireframe: wireframeTheme,
  monochrome: monochromeTheme,
  memphis: memphisTheme,
  spatial: spatialTheme,
  pixel: pixelTheme,
  holographic: holographicTheme,
  organic: organicTheme,
}

const ThemeContext = createContext({
  themeName: 'claymorphism',
  styles: THEMES.claymorphism,
  setTheme: () => null,
})

export const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState(() => {
    return localStorage.getItem('designStyle') || 'claymorphism'
  })

  useEffect(() => {
    localStorage.setItem('designStyle', themeName)
    // Optional: add data attribute to html for any global CSS targeting
    document.documentElement.setAttribute('data-design', themeName)
  }, [themeName])

  const styles = THEMES[themeName] || THEMES.claymorphism

  return (
    <ThemeContext.Provider value={{ themeName, styles, setTheme: setThemeName }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
