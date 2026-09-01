import React from "react"
import { cn } from "../../utils"

import { useTheme } from "../../providers/ThemeProvider"

export const TypographyH1 = ({ children, className }) => {
  const { styles } = useTheme()
  const tyStyles = styles.typography || {}
  return (
    <h1 className={cn(tyStyles.h1 || "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-dark", className)}>
      {children}
    </h1>
  )
}

export const TypographyH2 = ({ children, className }) => {
  const { styles } = useTheme()
  const tyStyles = styles.typography || {}
  return (
    <h2 className={cn(tyStyles.h2 || "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-dark", className)}>
      {children}
    </h2>
  )
}

export const TypographyH3 = ({ children, className }) => {
  const { styles } = useTheme()
  const tyStyles = styles.typography || {}
  return (
    <h3 className={cn(tyStyles.h3 || "scroll-m-20 text-2xl font-semibold tracking-tight text-dark", className)}>
      {children}
    </h3>
  )
}

export const TypographyP = ({ children, className }) => {
  const { styles } = useTheme()
  const tyStyles = styles.typography || {}
  return (
    <p className={cn(tyStyles.p || "leading-7 text-gray-600 dark:text-gray-300", className)}>
      {children}
    </p>
  )
}
