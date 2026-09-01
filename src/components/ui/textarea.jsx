import React from "react"
import { cn } from "../../utils"
import { useTheme } from '@/providers/ThemeProvider'

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  const { styles } = useTheme()
  const defaultTextareaStyle = "bg-bgbase text-gray-700 placeholder:text-gray-400 focus:ring-primary shadow-inner rounded-xl border-none outline-none focus:ring-2"
  
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50",
        styles.input || defaultTextareaStyle,
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
