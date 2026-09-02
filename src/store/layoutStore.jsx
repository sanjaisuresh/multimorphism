import { makeAutoObservable, reaction } from 'mobx'

class LayoutStore {
  sidebarOpen = false
  themeLayout = localStorage.getItem('themeLayout') || 'vertical' // vertical, mini, horizontal
  themeStretch = localStorage.getItem('themeStretch') === 'true'
  breadCrumb = localStorage.getItem('breadCrumb') !== 'false'
  multiTab = localStorage.getItem('multiTab') === 'true'

  constructor(rootStore) {
    this.rootStore = rootStore
    makeAutoObservable(this)

    reaction(() => this.themeLayout, layout => localStorage.setItem('themeLayout', layout))
    reaction(() => this.themeStretch, stretch => localStorage.setItem('themeStretch', stretch.toString()))
    reaction(() => this.breadCrumb, val => localStorage.setItem('breadCrumb', val.toString()))
    reaction(() => this.multiTab, val => localStorage.setItem('multiTab', val.toString()))
  }

  toggleSidebar = () => {
    this.sidebarOpen = !this.sidebarOpen
  }

  setSidebarOpen = (isOpen) => {
    this.sidebarOpen = isOpen
  }

  setThemeLayout = (layout) => {
    this.themeLayout = layout
  }

  setThemeStretch = (stretch) => {
    this.themeStretch = stretch
  }
  
  setBreadCrumb = (show) => {
    this.breadCrumb = show
  }
  
  setMultiTab = (show) => {
    this.multiTab = show
  }
}

export default LayoutStore
