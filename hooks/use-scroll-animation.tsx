"use client"

import { useEffect, useRef, useState } from "react"

type AnimationDirection = "up" | "down" | "left" | "right"

interface UseScrollAnimationProps {
  threshold?: number
  rootMargin?: string
  direction?: AnimationDirection
  delay?: number
  once?: boolean
}

export function useScrollAnimation({
  threshold = 0.1,
  rootMargin = "0px",
  direction = "up",
  delay = 0,
  once = true,
}: UseScrollAnimationProps = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)

          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin,
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, rootMargin, delay, once])

  const getAnimationClass = () => {
    if (!isVisible) {
      switch (direction) {
        case "up":
          return "translate-y-10 opacity-0"
        case "down":
          return "-translate-y-10 opacity-0"
        case "left":
          return "translate-x-10 opacity-0"
        case "right":
          return "-translate-x-10 opacity-0"
        default:
          return "opacity-0"
      }
    }
    return "translate-y-0 translate-x-0 opacity-100"
  }

  return {
    ref,
    isVisible,
    animationClass: getAnimationClass(),
  }
}
