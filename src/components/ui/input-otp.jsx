import React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { Dot } from "lucide-react"
import { cn } from "../../utils"

import { useTheme } from '@/providers/ThemeProvider'

const InputOTP = React.forwardRef(({ className, containerClassName, ...props }, ref) => {
  const { styles } = useTheme()
  return (
    <OTPInput
      ref={ref}
      containerClassName={cn(styles.otp?.container || "flex items-center gap-2 has-[:disabled]:opacity-50", containerClassName)}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  )
})
InputOTP.displayName = "InputOTP"

const InputOTPGroup = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center", className)} {...props} />
))
InputOTPGroup.displayName = "InputOTPGroup"

const InputOTPSlot = React.forwardRef(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

  const { styles } = useTheme()
  
  return (
    <div
      ref={ref}
      className={cn(
        styles.otp?.slot || "relative flex h-10 w-10 items-center justify-center border-y border-r border-gray-200 text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive ? (styles.otp?.slotActive || "z-10 ring-2 ring-primary ring-offset-bgbase shadow-inner bg-bgbase") : (styles.otp?.slotInactive || "bg-white shadow-clay-base"),
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-gray-900 duration-1000" />
        </div>
      )}
    </div>
  )
})
InputOTPSlot.displayName = "InputOTPSlot"

const InputOTPSeparator = React.forwardRef(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Dot />
  </div>
))
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
