"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

interface GalleryImage {
  id: string
  src: string
  alt: string
  position: "main" | "sub-back" | "sub-front"
}

export function InteractiveImageGallery() {
  // Define the images with direct URLs
  const images: GalleryImage[] = [
    {
      id: "main",
      src: "https://i.imgur.com/ptZsZGJ.png",
      alt: "Galaxies Discord App - Main View",
      position: "main",
    },
    {
      id: "back",
      src: "https://i.imgur.com/EFUCcJ3.png",
      alt: "Galaxies Discord App - Back View",
      position: "sub-back",
    },
    {
      id: "front",
      src: "https://i.imgur.com/dVOWGmz.png",
      alt: "Galaxies Discord App - Front View",
      position: "sub-front",
    },
  ]

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()

  // Handle mouse movement for the entire page
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate position relative to the window size
      const x = e.clientX / window.innerWidth - 0.5
      const y = e.clientY / window.innerHeight - 0.5

      setMousePosition({ x, y })
    }

    // Add event listener to the window
    window.addEventListener("mousemove", handleMouseMove)

    // Clean up
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full max-w-[500px] max-h-[500px] mx-auto"
      aria-label="Interactive image gallery of Galaxies Discord App"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 blur-3xl opacity-70 animate-pulse-slow"></div>

      {/* Only show main image on mobile */}
      {isMobile ? (
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={images.find((img) => img.id === "main")?.src || "/placeholder.svg"}
            alt="Galaxies Discord App"
            width={400}
            height={400}
            className="relative object-contain border-4 border-background shadow-xl animate-float"
            priority
            unoptimized
          />
        </div>
      ) : (
        // Show all images with parallax effect on desktop
        <>
          {images.map((image) => {
            // Calculate transform based on mouse position and image position
            // Increased multiplier for main image to make its movement more noticeable
            const multiplier = image.id === "main" ? 20 : image.id === "back" ? 15 : 20

            const translateX = mousePosition.x * multiplier
            const translateY = mousePosition.y * multiplier

            // Determine positioning based on image position
            const positionClasses = getPositionClasses(image.position)

            // Add extra right offset for main image
            const extraStyle = image.id === "main" ? { marginLeft: "40px" } : {}

            return (
              <div
                key={image.id}
                className={cn("absolute transition-all duration-300 ease-out", positionClasses)}
                style={{
                  transform: `translate(${translateX}px, ${translateY}px)`,
                  zIndex: image.id === "main" ? 10 : image.id === "back" ? 5 : 1,
                  ...extraStyle,
                }}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={image.id === "main" ? 400 : 300}
                  height={image.id === "main" ? 400 : 300}
                  className="object-contain border-4 border-background shadow-xl transition-all duration-300"
                  priority={image.id === "main"}
                  unoptimized
                />
              </div>
            )
          })}
        </>
      )}
    </div>
  )
}

// Helper function to get position classes based on image position
function getPositionClasses(position: string): string {
  // Main image is centered but slightly to the right
  if (position === "main") {
    return "inset-0 m-auto"
  }

  // Position sub images based on their type
  if (position === "sub-back") {
    return "top-1/4 -left-10"
  }

  if (position === "sub-front") {
    return "bottom-1/4 -right-10"
  }

  return ""
}
