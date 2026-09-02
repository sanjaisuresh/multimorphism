import React, { createContext, useContext } from 'react'
import ThemeStore from './themeStore'
import LayoutStore from './layoutStore'

import DashboardStore from './dashboardStore'
import ProfileStore from './profileStore'
import AuthStore from './authStore'

class RootStore {
  constructor() {
    this.themeStore = new ThemeStore(this)
    this.layoutStore = new LayoutStore(this)
    this.dashboardStore = new DashboardStore(this)
    this.profileStore = new ProfileStore(this)
    this.authStore = new AuthStore(this)
  }
}

const rootStore = new RootStore()
export const StoreContext = createContext(rootStore)

export const StoreProvider = ({ children }) => {
  return (
    <StoreContext.Provider value={rootStore}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => useContext(StoreContext)
