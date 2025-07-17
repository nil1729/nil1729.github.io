"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
}

export function AnimatedSection({
  children,
  className,
}: AnimatedSectionProps) {
  return (
    <div className={cn(className)}>
      {children}
    </div>
  )
}
