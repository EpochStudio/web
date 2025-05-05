"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "alex.johnson",
    role: "Server Owner",
    avatar: "https://i.pravatar.cc/150?u=328479sfjse29026704d",
    content:
      "Galaxies has completely transformed how I manage my Discord server. The ALT detector has saved us from countless raids, and the welcome system makes new members feel right at home!",
    server: "Gaming Community",
  },
  {
    id: 2,
    name: "sulfurnire._sees",
    role: "Community Manager",
    avatar: "https://i.pravatar.cc/150?u=3wedsf45e293fd704d",
    content:
      "I've tried many Discord bots, but Galaxies stands out with its reliability and feature set. The sticky messages feature is a game-changer for our announcements channel.",
    server: "Art & Design Hub",
  },
  {
    id: 3,
    name: "chen_michael.",
    role: "Admin",
    avatar: "https://i.pravatar.cc/150?u=qu74udjc221cer9026704d",
    content:
      "The level system has dramatically increased engagement in our server. Members are more active than ever, and the custom rewards keep everyone motivated.",
    server: "Tech Support",
  },
  {
    id: 4,
    name: "chickenjockey_",
    role: "Moderator",
    avatar: "https://i.pravatar.cc/150?u=afdf479s23kdf9026704d",
    content:
      "As a moderator, Galaxies makes my job so much easier. The moderation tools are intuitive and powerful. I especially love the infractions system for keeping track of warnings.",
    server: "Educational Community",
  },
  {
    id: 5,
    name: "lynnieiscute",
    role: "Server Owner",
    avatar: "https://i.pravatar.cc/150?u=7ddsdqd4fdc267wqw4d",
    content:
      "Setting up giveaways used to be a hassle until we added Galaxies to our server. Now it's just a simple command, and everything runs smoothly. Our members love it!",
    server: "Streaming Community",
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const nextTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }, [])

  const prevTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }, [])

  // Handle autoplay
  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, nextTestimonial])

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false)
  const handleMouseLeave = () => setAutoplay(true)

  // Handle touch events for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      nextTestimonial()
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      prevTestimonial()
    }
  }

  return (
    <section className="w-full py-12 md:py-24 bg-muted/50 section-animate">
      <div className="container px-6 sm:px-8 md:px-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-flex items-center justify-center rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <Quote className="mr-1 h-3 w-3" />
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Users Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Hear from the Discord communities that use Galaxies every day
            </p>
          </div>
        </div>

        <div
          className="relative mt-12 max-w-4xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden px-10 md:px-16">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-background/60 backdrop-blur-sm h-[300px] md:h-[250px] flex flex-col">
                    <CardContent className="p-6 flex flex-col justify-between h-full">
                      <div className="flex flex-col items-center text-center">
                        <Quote className="h-10 w-10 text-primary/30 mb-4" />
                        <p className="text-lg">{testimonial.content}</p>
                      </div>
                      <div className="flex items-center mt-4 justify-center">
                        <div className="rounded-full overflow-hidden mr-4">
                          <Image
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={50}
                            height={50}
                            className="object-cover"
                          />
                        </div>
                        <div className="text-left">
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}, {testimonial.server}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-background shadow-md"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-background shadow-md"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === activeIndex ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
