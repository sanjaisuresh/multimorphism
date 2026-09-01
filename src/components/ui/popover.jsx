import React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"
import { cn } from "../../utils"
import { useTheme } from '@/providers/ThemeProvider'

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverContent = React.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => {
  const { styles } = useTheme()
  const defaultPopoverStyle = "z-50 w-72 rounded-xl border bg-white p-4 text-gray-700 shadow-clay-hover outline-none animate-in zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"

  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={cn(
          styles.popover || defaultPopoverStyle,
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
})
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent }
