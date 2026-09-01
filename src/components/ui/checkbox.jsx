import React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"
import { cn } from "../../utils"
import { useTheme } from '@/providers/ThemeProvider'

const Checkbox = React.forwardRef(({ className, ...props }, ref) => {
  const { styles } = useTheme()
  const defaultCheckboxRootStyle = "peer h-5 w-5 shrink-0 rounded-lg bg-bgbase shadow-inner focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-white data-[state=checked]:shadow-clay-primary transition-all duration-200"
  const defaultCheckboxIconStyle = "h-4 w-4"

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        styles.checkbox?.root || defaultCheckboxRootStyle,
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn("flex items-center justify-center text-current")}
      >
        <Check className={cn(styles.checkbox?.icon || defaultCheckboxIconStyle)} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
})
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
