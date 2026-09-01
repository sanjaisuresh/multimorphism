import React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cn } from "../../utils"

import { useTheme } from "../../providers/ThemeProvider"

const Avatar = React.forwardRef(({ className, ...props }, ref) => {
  const { styles } = useTheme()
  const aStyles = styles.avatar || {}
  
  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(
        aStyles.root || "relative flex h-10 w-10 shrink-0 overflow-hidden",
        className
      )}
      {...props}
    />
  )
})
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef(({ className, ...props }, ref) => {
  const { styles } = useTheme()
  const aStyles = styles.avatar || {}
  
  return (
    <AvatarPrimitive.Image
      ref={ref}
      className={cn(aStyles.image || "aspect-square h-full w-full object-cover", className)}
      {...props}
    />
  )
})
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => {
  const { styles } = useTheme()
  const aStyles = styles.avatar || {}
  
  return (
    <AvatarPrimitive.Fallback
      ref={ref}
      className={cn(
        aStyles.fallback || "flex h-full w-full items-center justify-center bg-bgbase text-primary font-semibold text-sm",
        className
      )}
      {...props}
    />
  )
})
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
