import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/utils'
import { useTheme } from '@/providers/ThemeProvider'

export const Button = React.forwardRef(({ className, variant = 'primary', asChild = false, ...props }, ref) => {
  const { styles } = useTheme()
  const buttonStyles = styles.button || {}
  
  const Comp = asChild ? Slot : "button"
  
  return (
    <Comp ref={ref} className={cn(buttonStyles.base, buttonStyles[variant], className)} {...props} />
  )
})
Button.displayName = "Button"
