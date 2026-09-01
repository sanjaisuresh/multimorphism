import React from 'react'
import { StoreProvider } from '@/store'
import AppRouter from '@/routes'

import { ThemeProvider } from '@/providers/ThemeProvider'

function App() {
  return (
    <ThemeProvider>
      <StoreProvider>
        <AppRouter />
      </StoreProvider>
    </ThemeProvider>
  )
}

export default App
