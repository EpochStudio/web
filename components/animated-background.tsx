"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface Star {
  x: number
  y: number
  size: number
  opacity: number
  speed: number
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme, resolvedTheme } = useTheme()

  // Use resolvedTheme to get the actual current theme
  const isDark = resolvedTheme === "dark"

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Initialize stars
    let stars: Star[] = []
    const initStars = () => {
      const starCount = Math.floor((window.innerWidth * window.innerHeight) / 10000)
      stars = []

      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.5 + 0.3,
          speed: Math.random() * 0.05 + 0.01,
        })
      }
    }

    // Animation loop
    let animationFrameId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Only draw stars in dark mode
      if (isDark) {
        stars.forEach((star) => {
          ctx.beginPath()
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
          ctx.fill()

          // Move star
          star.y += star.speed

          // Reset star position if it goes off screen
          if (star.y > canvas.height) {
            star.y = 0
            star.x = Math.random() * canvas.width
          }
        })
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    // Handle resize
    window.addEventListener("resize", () => {
      resizeCanvas()
      initStars()
    })

    // Initialize
    resizeCanvas()
    initStars()
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isDark]) // Add isDark as a dependency to re-initialize when theme changes

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[-1] opacity-70" aria-hidden="true" />
}
