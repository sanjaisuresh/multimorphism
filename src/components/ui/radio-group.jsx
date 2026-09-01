import React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"
import { cn } from "../../utils"

import { useTheme } from '@/providers/ThemeProvider'

const RadioGroup = React.forwardRef(({ className, ...props }, ref) => {
  const { styles } = useTheme()
  return (
    <RadioGroupPrimitive.Root
      className={cn(styles.radio?.root || "grid gap-2", className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef(({ className, ...props }, ref) => {
  const { styles } = useTheme()
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        styles.radio?.item || "aspect-square h-5 w-5 rounded-full bg-bgbase shadow-inner text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:shadow-clay-primary transition-all duration-200",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
