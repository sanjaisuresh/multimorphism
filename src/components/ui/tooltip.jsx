import React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { cn } from "../../utils"
import { useTheme } from '@/providers/ThemeProvider'

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => {
  const { styles } = useTheme()
  const defaultTooltipStyle = "z-50 overflow-hidden rounded-md bg-bgbase px-3 py-1.5 text-xs text-gray-700 shadow-clay-base animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"

  return (
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        styles.tooltip || defaultTooltipStyle,
        className
      )}
      {...props}
    />
  )
})
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
