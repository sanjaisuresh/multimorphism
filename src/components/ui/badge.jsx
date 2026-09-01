import React from 'react'
import { useTheme } from '@/providers/ThemeProvider'
import { cn } from '@/utils'

export const Badge = ({ children, color = 'blue', className = '' }) => {
  const { styles } = useTheme()
  const defaultBadgeStyle = "inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold shadow-sm border border-white/50 bg-blue-50 text-blue-600 transition-colors focus:outline-none"
  
  return (
    <span className={cn(
      styles.badge || defaultBadgeStyle,
      className
    )}>
      {children}
    </span>
  )
}
