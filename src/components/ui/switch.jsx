import React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"
import { cn } from "../../utils"
import { useTheme } from '@/providers/ThemeProvider'

const Switch = React.forwardRef(({ className, ...props }, ref) => {
  const { styles } = useTheme()
  const defaultSwitchTrackStyle = "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bgbase disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-gray-200 data-[state=unchecked]:shadow-inner data-[state=checked]:shadow-clay-primary"
  const defaultSwitchThumbStyle = "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-clay-base ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
  
  return (
    <SwitchPrimitives.Root
      className={cn(
        styles.switch?.root || defaultSwitchTrackStyle,
        className
      )}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          styles.switch?.thumb || defaultSwitchThumbStyle
        )}
      />
    </SwitchPrimitives.Root>
  )
})

Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
