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

export const CardHeader = ({ className, ...props }) => (
  <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
)

export const CardTitle = ({ className, ...props }) => (
  <h3 className={cn("font-semibold leading-none tracking-tight", className)} {...props} />
)

export const CardDescription = ({ className, ...props }) => (
  <p className={cn("text-sm text-muted-foreground", className)} {...props} />
)

export const CardContent = ({ className, ...props }) => (
  <div className={cn("p-6 pt-0", className)} {...props} />
)

export const CardFooter = ({ className, ...props }) => (
  <div className={cn("flex items-center p-6 pt-0", className)} {...props} />
)
