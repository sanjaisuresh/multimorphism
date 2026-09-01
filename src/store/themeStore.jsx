import { makeAutoObservable, reaction } from 'mobx'
import { generateColorPalette } from '../utils/colorUtils'

class ThemeStore {
  themeMode = localStorage.getItem('themeMode') || 'light'
  themeColorPresets = localStorage.getItem('themeColorPresets') || 'cyan'
  fontFamily = localStorage.getItem('fontFamily') || 'Outfit'
  fontSize = parseInt(localStorage.getItem('fontSize')) || 16

  constructor(rootStore) {
    this.rootStore = rootStore
    makeAutoObservable(this)

    // Initial DOM setup
    this.applyInitialSettings()

    // Setup LocalStorage persistence reactions
    reaction(() => this.themeMode, mode => localStorage.setItem('themeMode', mode))
    reaction(() => this.themeColorPresets, color => localStorage.setItem('themeColorPresets', color))
    reaction(() => this.fontFamily, font => localStorage.setItem('fontFamily', font))
  }

  applyInitialSettings() {
    this.setThemeMode(this.themeMode)
    this.setThemeColorPresets(this.themeColorPresets)
    this.setFontFamily(this.fontFamily)
  }

  setThemeMode = (mode) => {
    this.themeMode = mode
    if (mode === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  setThemeColorPresets = (color) => {
    this.themeColorPresets = color
    
    // Clear any previously set inline variables
    document.documentElement.style.removeProperty('--primary-lighter')
    document.documentElement.style.removeProperty('--primary-light')
    document.documentElement.style.removeProperty('--primary-default')
    document.documentElement.style.removeProperty('--primary-dark')
    document.documentElement.style.removeProperty('--primary-darker')

    if (color.startsWith('#')) {
      // Custom Hex Color
      document.documentElement.removeAttribute('data-theme')
      const palette = generateColorPalette(color)
      document.documentElement.style.setProperty('--primary-lighter', palette.lighter)
      document.documentElement.style.setProperty('--primary-light', palette.light)
      document.documentElement.style.setProperty('--primary-default', palette.default)
      document.documentElement.style.setProperty('--primary-dark', palette.dark)
      document.documentElement.style.setProperty('--primary-darker', palette.darker)
    } else {
      // Preset String (e.g. 'cyan', 'yellow')
      document.documentElement.setAttribute('data-theme', color === 'cyan' ? '' : color)
    }
  }

  setFontFamily = (font) => {
    this.fontFamily = font
    document.documentElement.style.setProperty('--font-family', `"${font}", sans-serif`)
  }

  setFontSize = (size) => {
    this.fontSize = size
    document.documentElement.style.fontSize = `${size}px`
  }
}

export default ThemeStore
