import React from "react"
import { cn } from "../../utils"

const Sidebar = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex h-screen w-64 flex-col bg-bgbase border-r border-white shadow-clay-hover",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
})
Sidebar.displayName = "Sidebar"

const SidebarHeader = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex h-14 items-center border-b border-gray-200 px-4 py-2", className)}
      {...props}
    >
      {children}
    </div>
  )
})
SidebarHeader.displayName = "SidebarHeader"

const SidebarContent = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex-1 overflow-auto py-2", className)}
      {...props}
    >
      {children}
    </div>
  )
})
SidebarContent.displayName = "SidebarContent"

const SidebarGroup = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("px-2 py-2", className)}
      {...props}
    >
      {children}
    </div>
  )
})
SidebarGroup.displayName = "SidebarGroup"

const SidebarGroupLabel = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("px-2 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider", className)}
      {...props}
    >
      {children}
    </div>
  )
})
SidebarGroupLabel.displayName = "SidebarGroupLabel"

const SidebarItem = React.forwardRef(({ className, active, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:bg-gray-100 hover:text-gray-900 cursor-pointer",
        active ? "bg-white shadow-clay-base text-primary" : "text-gray-600",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
})
SidebarItem.displayName = "SidebarItem"

const SidebarFooter = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("mt-auto flex items-center border-t border-gray-200 p-4", className)}
      {...props}
    >
      {children}
    </div>
  )
})
SidebarFooter.displayName = "SidebarFooter"

export { Sidebar, SidebarHeader, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarItem, SidebarFooter }
