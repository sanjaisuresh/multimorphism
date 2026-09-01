import React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cn } from "../../utils"

import { useTheme } from '@/providers/ThemeProvider'

const Label = React.forwardRef(({ className, ...props }, ref) => {
  const { styles } = useTheme()
  const defaultStyle = "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-dark"

  return (
    <LabelPrimitive.Root
      ref={ref}
      className={cn(
        styles.label || defaultStyle,
        className
      )}
      {...props}
    />
  )
})
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
