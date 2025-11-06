"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import * as React from "react"

export function CarouselComponent() {
  const [current, setCurrent] = React.useState(0)
  const [progress, setProgress] = React.useState(0)
  const slides = Array.from({ length: 5 })
  const duration = 5000 // waktu per slide (ms)

  // Autoplay logic
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
      setProgress(0)
    }, duration)

    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 100 / (duration / 100)))
    }, 100)

    return () => {
      clearInterval(interval)
      clearInterval(progressInterval)
    }
  }, [slides.length])

  return (
    <section className="relative w-full h-[60vh] flex flex-col justify-center items-center bg-orange-600/60 backdrop-blur-sm overflow-hidden">
      <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center">
        {/* Carousel container */}
        <div className="relative w-full flex-1 flex items-center justify-center">
          <Carousel
            opts={{ align: "center", loop: true }}
            className="relative w-full h-full"
          >
            <CarouselContent className="h-full">
              {slides.map((_, index) => (
                <CarouselItem
                  key={index}
                  className={cn(
                    "flex items-center justify-center w-full h-full transition-opacity duration-700",
                    current === index
                      ? "opacity-100"
                      : "opacity-0 absolute inset-0"
                  )}
                >
                  <div className="p-4 w-full h-full flex items-center justify-center">
                    <Card className="border-none shadow-none bg-transparent h-full">
                      <CardContent className="flex items-center justify-center text-white text-4xl font-semibold h-full">
                        Slide {index + 1}
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Progress bar di bawah carousel */}
          <div className="absolute bottom-0 left-0 right-0 px-4">
            <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-white transition-all duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Breadcrumb di bawah progress bar */}
        <div className="mt-6 flex gap-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={cn(
                "h-1 w-10 rounded-full transition-all cursor-pointer",
                index === current
                  ? "bg-white w-14"
                  : "bg-white/40 hover:bg-white/60"
              )}
              onClick={() => {
                setCurrent(index)
                setProgress(0)
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
