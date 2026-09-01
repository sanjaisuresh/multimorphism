import React from "react"
import { cn } from "../../utils"

function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-gray-200 shadow-inner", className)}
      {...props}
    />
  )
}

export { Skeleton }
