"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        // Base styles
        "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
        // Light theme styles
        "bg-slate-200 hover:bg-slate-300 data-[state=checked]:bg-blue-600 data-[state=checked]:hover:bg-blue-700",
        // Dark theme styles
        "dark:bg-slate-800 dark:hover:bg-slate-700 dark:data-[state=checked]:bg-blue-500 dark:data-[state=checked]:hover:bg-blue-400",
        // Enhanced transitions
        "transition-all duration-200 ease-in-out",
        // Shadow effects
        "shadow-sm hover:shadow-md data-[state=checked]:shadow-lg",
        // Ring effects for better accessibility
        "focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          // Base thumb styles
          "pointer-events-none block h-5 w-5 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
          // Light theme thumb
          "bg-white border border-slate-300",
          // Dark theme thumb
          "dark:bg-slate-100 dark:border-slate-600",
          // Enhanced transitions and effects
          "transition-all duration-200 ease-in-out",
          // Hover effects on thumb
          "hover:scale-105",
          // Active state effects
          "data-[state=checked]:bg-white data-[state=checked]:shadow-xl",
          "dark:data-[state=checked]:bg-white dark:data-[state=checked]:shadow-xl"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

// Enhanced theme-aware switch with icon support
function ThemeSwitch({
  className,
  showIcons = false,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root> & {
  showIcons?: boolean
}) {
  return (
    <div className="relative inline-flex items-center">
      {showIcons && (
        <div className="absolute inset-0 flex items-center justify-between px-1 pointer-events-none z-10">
          <div className="text-xs text-slate-600 dark:text-slate-400 opacity-70">
            🌙
          </div>
          <div className="text-xs text-slate-600 dark:text-slate-400 opacity-70">
            ☀️
          </div>
        </div>
      )}
      <SwitchPrimitive.Root
        data-slot="theme-switch"
        className={cn(
          // Base styles with larger size for theme switching
          "peer inline-flex h-7 w-14 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
          // Light theme - representing day mode
          "bg-gradient-to-r from-blue-200 to-blue-300 hover:from-blue-300 hover:to-blue-400 data-[state=checked]:from-slate-700 data-[state=checked]:to-slate-900",
          // Dark theme - representing night mode
          "dark:from-slate-700 dark:to-slate-900 dark:hover:from-slate-600 dark:hover:to-slate-800 dark:data-[state=checked]:from-blue-500 dark:data-[state=checked]:to-blue-600",
          // Enhanced visual effects
          "transition-all duration-300 ease-in-out",
          "shadow-inner hover:shadow-lg",
          "focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400",
          className
        )}
        {...props}
      >
        <SwitchPrimitive.Thumb
          data-slot="theme-switch-thumb"
          className={cn(
            // Base thumb styles
            "pointer-events-none block h-6 w-6 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-7 data-[state=unchecked]:translate-x-0",
            // Light theme thumb - sun appearance
            "bg-gradient-to-br from-yellow-200 to-yellow-400 border-2 border-yellow-300",
            // Dark theme thumb - moon appearance
            "dark:bg-gradient-to-br dark:from-slate-200 dark:to-slate-300 dark:border-slate-400",
            // Enhanced transitions and effects
            "transition-all duration-300 ease-in-out",
            // Hover and active effects
            "hover:scale-105 hover:shadow-xl",
            // Theme-specific effects
            "data-[state=checked]:bg-gradient-to-br data-[state=checked]:from-slate-200 data-[state=checked]:to-slate-300",
            "dark:data-[state=checked]:from-yellow-200 dark:data-[state=checked]:to-yellow-400"
          )}
        />
      </SwitchPrimitive.Root>
    </div>
  )
}

export { Switch, ThemeSwitch }