"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { PenBox } from "@/components/looseleaf/paper"

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = (resolvedTheme || theme) === "dark"

  return (
    <button
      type="button"
      className="ll-iconbtn"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle theme"}
    >
      <PenBox seed="theme-toggle" w={40} h={40} fill="var(--ll-slip)" strokeWidth={1.5} amp={0.7} sketch={false} />
      <span className="ll-iconbtn-glyph">
        {mounted ? isDark ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" /> : null}
      </span>
    </button>
  )
}
