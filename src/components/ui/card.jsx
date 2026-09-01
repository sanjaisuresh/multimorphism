import React from 'react'
import { useTheme } from '@/providers/ThemeProvider'
import { cn } from '@/utils'

export const Card = ({ children, className = '', ...props }) => {
  const { styles } = useTheme()
  return (
    <div className={cn(styles.card, className)} {...props}>
      {children}
    </div>
  )
}
