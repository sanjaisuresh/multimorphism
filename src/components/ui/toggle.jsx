import React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cn } from "../../utils"

import { useTheme } from '@/providers/ThemeProvider'

const Toggle = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  const { styles } = useTheme()
  return (
    <TogglePrimitive.Root
      ref={ref}
      className={cn(
        styles.toggle?.root || "inline-flex items-center justify-center rounded-xl text-sm font-medium ring-offset-bgbase transition-all hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-primary data-[state=on]:text-white data-[state=on]:shadow-clay-primary",
        "h-10 px-3",
        className
      )}
      {...props}
    />
  )
})
Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle }
