import React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { cn } from "../../utils"

import { useTheme } from '@/providers/ThemeProvider'

const ToggleGroupContext = React.createContext({ size: "default", variant: "default" })

const ToggleGroup = React.forwardRef(({ className, variant, size, children, ...props }, ref) => {
  const { styles } = useTheme()
  return (
    <ToggleGroupPrimitive.Root
      ref={ref}
      className={cn(styles.toggleGroup?.root || "flex items-center justify-center gap-1 bg-gray-200 p-1 rounded-2xl shadow-inner w-fit", className)}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  )
})
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName

const ToggleGroupItem = React.forwardRef(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext)
  const { styles } = useTheme()
  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        styles.toggleGroup?.item || "inline-flex items-center justify-center rounded-xl text-sm font-medium ring-offset-bgbase transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-white data-[state=on]:text-primary data-[state=on]:shadow-clay-base h-9 px-3",
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
})
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName

export { ToggleGroup, ToggleGroupItem }
