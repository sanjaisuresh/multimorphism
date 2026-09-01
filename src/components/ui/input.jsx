import React from 'react'
import { useTheme } from '@/providers/ThemeProvider'
import { cn } from '@/utils'

export const Input = React.forwardRef(({ label, className = '', ...props }, ref) => {
  const { styles } = useTheme()
  const defaultInputStyle = "w-full bg-bgbase rounded-xl py-2 px-3 outline-none text-sm focus:ring-2 focus:ring-primary shadow-inner text-gray-700 placeholder-gray-400"
  
  return (
    <div className={`flex flex-col gap-1 w-full`}>
      {label && <label className={cn(styles.label || "text-xs font-bold text-gray-500", "mb-1 block")}>{label}</label>}
      <input 
        ref={ref}
        className={cn(
          "py-2 px-3 text-sm", // Base padding and text size
          styles.input || defaultInputStyle,
          className
        )}
        {...props}
      />
    </div>
  )
})
Input.displayName = 'Input'
