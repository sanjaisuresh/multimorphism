import React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cn } from "../../utils"
import { useTheme } from '@/providers/ThemeProvider'

const Slider = React.forwardRef(({ className, ...props }, ref) => {
  const { styles } = useTheme()
  const defaultRoot = "relative flex w-full touch-none select-none items-center"
  const defaultTrack = "relative h-2 w-full grow overflow-hidden rounded-full bg-gray-200 shadow-inner"
  const defaultRange = "absolute h-full bg-primary"
  const defaultThumb = "block h-5 w-5 rounded-full border-2 border-primary bg-white shadow-clay-base ring-offset-bgbase transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:scale-110 active:scale-95"

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        styles.slider?.root || defaultRoot,
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track className={cn(styles.slider?.track || defaultTrack)}>
        <SliderPrimitive.Range className={cn(styles.slider?.range || defaultRange)} />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className={cn(styles.slider?.thumb || defaultThumb)} />
    </SliderPrimitive.Root>
  )
})
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
