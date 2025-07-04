'use client'

import { Switch } from '@/components/ui/switch'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { Sun, Moon, Monitor } from 'lucide-react'

function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-gray-300 rounded animate-pulse" />
                <div className="w-12 h-6 bg-gray-300 rounded-full animate-pulse" />
                <div className="w-4 h-4 bg-gray-300 rounded animate-pulse" />
            </div>
        )
    }

    const isLight = theme === 'light'

    return (
        <div className="flex items-center space-x-3 p-2 rounded-lg bg-slate-100 dark:bg-slate-800 transition-colors duration-200">
            {/* Moon Icon */}
            <Moon 
                className={`w-4 h-4 transition-all duration-200 ${
                    !isLight 
                        ? 'text-blue-500 scale-110' 
                        : 'text-slate-400 dark:text-slate-500'
                }`}
            />
            
            {/* Enhanced Switch */}
            <Switch
                checked={isLight}
                onCheckedChange={() => setTheme(isLight ? 'dark' : 'light')}
                className="relative h-7 w-14 data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-yellow-400 data-[state=checked]:to-orange-500 data-[state=unchecked]:bg-gradient-to-r data-[state=unchecked]:from-slate-600 data-[state=unchecked]:to-slate-800 border-0 shadow-inner"
                aria-label="Toggle theme"
            />
            
            {/* Sun Icon */}
            <Sun 
                className={`w-4 h-4 transition-all duration-200 ${
                    isLight 
                        ? 'text-yellow-500 scale-110' 
                        : 'text-slate-400 dark:text-slate-500'
                }`}
            />
        </div>
    )
}

// Alternative compact version without background
function CompactThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="w-12 h-6 bg-gray-300 rounded-full animate-pulse" />
    }

    const isLight = theme === 'light'

    return (
        <div className="flex items-center space-x-2">
            <Switch
                checked={isLight}
                onCheckedChange={() => setTheme(isLight ? 'dark' : 'light')}
                className="relative h-6 w-12 data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-blue-200 data-[state=checked]:to-blue-400 data-[state=unchecked]:bg-gradient-to-r data-[state=unchecked]:from-slate-700 data-[state=unchecked]:to-slate-900"
                aria-label="Toggle between light and dark mode"
            />
        </div>
    )
}

// Premium version with animated icons inside the switch
function PremiumThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="w-16 h-8 bg-gray-300 rounded-full animate-pulse" />
    }

    const isLight = theme === 'light'

    return (
        <div className="relative">
            <Switch
                checked={isLight}
                onCheckedChange={() => setTheme(isLight ? 'dark' : 'light')}
                className="relative h-8 w-16 data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-sky-400 data-[state=checked]:via-blue-500 data-[state=checked]:to-blue-600 data-[state=unchecked]:bg-gradient-to-r data-[state=unchecked]:from-slate-800 data-[state=unchecked]:via-slate-900 data-[state=unchecked]:to-black shadow-lg"
                aria-label="Toggle theme mode"
            />
            
            {/* Animated icons inside the switch */}
            <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
                <Moon 
                    className={`w-3 h-3 transition-all duration-300 ${
                        !isLight 
                            ? 'text-yellow-400 opacity-100 scale-100' 
                            : 'text-slate-400 opacity-0 scale-75'
                    }`}
                />
                <Sun 
                    className={`w-3 h-3 transition-all duration-300 ${
                        isLight 
                            ? 'text-white opacity-100 scale-100' 
                            : 'text-slate-600 opacity-0 scale-75'
                    }`}
                />
            </div>
        </div>
    )
}

// System theme aware version
function SystemThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme, systemTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="w-20 h-6 bg-gray-300 rounded-full animate-pulse" />
    }

    const currentTheme = theme === 'system' ? systemTheme : theme
    const isLight = currentTheme === 'light'

    const cycleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else if (theme === 'dark') {
            setTheme('system')
        } else {
            setTheme('light')
        }
    }

    return (
        <div className="flex items-center space-x-2 p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
            <button
                onClick={cycleTheme}
                className="flex items-center space-x-2 px-3 py-1 rounded-md bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                aria-label={`Current theme: ${theme}. Click to cycle through themes.`}
            >
                {theme === 'light' && <Sun className="w-4 h-4 text-yellow-500" />}
                {theme === 'dark' && <Moon className="w-4 h-4 text-blue-500" />}
                {theme === 'system' && <Monitor className="w-4 h-4 text-gray-500" />}
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {theme === 'system' ? 'Auto' : theme === 'light' ? 'Light' : 'Dark'}
                </span>
            </button>
        </div>
    )
}

export default ThemeSwitcher
export { CompactThemeSwitcher, PremiumThemeSwitcher, SystemThemeSwitcher }