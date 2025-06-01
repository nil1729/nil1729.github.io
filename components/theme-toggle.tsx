"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleClick = () => {
    console.log("Button clicked!")
    console.log("Current theme:", theme)
    console.log("Resolved theme:", resolvedTheme)

    // Force the theme change
    const newTheme = resolvedTheme === "dark" ? "light" : "dark"
    console.log("Setting theme to:", newTheme)
    setTheme(newTheme)
  }

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className="w-9 px-0">
        <div className="h-4 w-4" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  const currentTheme = resolvedTheme || theme || "light"
  const isDark = currentTheme === "dark"

  return (
    <Button
      variant="ghost"
      size="sm"
      className="w-9 px-0 hover:bg-accent"
      onClick={handleClick}
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
