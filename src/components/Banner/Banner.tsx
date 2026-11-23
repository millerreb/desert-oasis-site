"use client"

import { useState, useEffect } from "react"
import Image, { type StaticImageData } from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ChevronLeft } from "lucide-react"
import { IoIosArrowForward } from "react-icons/io"
import banner from "@/../../public/image/amt.jpg"
import banner2 from "@/../../public/image/banner222.jpg"
import banner3 from "@/../../public/image/new banner 333.jpg"
import banner4 from "@/../../public/image/banner45.jpg"
import banner5 from "@/../../public/image/banner26.jpg"

interface SlideContent {
  id: number
  title: string
  description: string
  image: StaticImageData
  buttonText: string
  buttonLink: string
  target?: string
}

export default function Banner() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const slides: SlideContent[] = [
    {
      id: 1,
      title: "Your Skin, Our Expertise",
      description:
        "Get personalized, cutting-edge dermatology care from our board-certified specialists. Healthy, radiant skin starts here",
      image: banner,
      buttonText: "Schedule an Appointment",
      buttonLink: "https://l.klara.com/JKkUeq7HEnFzXBDj",
      target: "_blank",
    },
    {
      id: 2,
      title: "Discover Your Skin's Oasis",
      description:
        "We provide expert care in a calming environment, helping you achieve glowing, healthy skin with tailored treatments.",
      image: banner2,
      buttonText: "Book Your Visit Today",
      buttonLink: "https://l.klara.com/JKkUeq7HEnFzXBDj",
      target: "_blank",

    },
    {
      id: 3,
      title: "Care for Your Skin",
      description:
        "From acne to skin cancer screening, we offer comprehensive treatments to restore your skin's health and confidence.",
      image: banner3,
      buttonText: "Find Your Solution",
      buttonLink: "/services",
    },
    {
      id: 4,
      title: "Your Partner in Skin Health",
      description:
        "At Desert Oasis Dermatology, we prioritize your skin's well-being with expert care and a compassionate touch",
      image: banner4,
      buttonText: "Get Started Today",
      buttonLink: "/hours-and-location",
    },
    {
      id: 5,
      title: "Rejuvenate. Restore. Glow.",
      description:
        "Whether medical or cosmetic, our treatments are designed to enhance your natural beauty and well-being.",
      image: banner5,
      buttonText: "Explore Our Services",
      buttonLink: "/services",
    },
  ]

  if (!isMounted) {
    return null
  }

  return (
    <div className="w-full bg-sand">
      <Carousel className="w-full px-14 sm:px-[4.5rem]" opts={{ loop: true }}>
        <div className="mx-auto max-w-[1920px]">
          <CarouselContent>
            {slides.map((slide) => (
              <CarouselItem key={slide.id}>
                <div className="grid h-full lg:grid-cols-[minmax(0,1fr)_max(18rem,30%)] lg:items-center">
                  <div className="relative aspect-video w-full lg:max-h-[min(60svh,620px)]">
                    <Image
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.title}
                      fill
                      priority
                      sizes="(min-width: 2064px) 1344px, (min-width: 1024px) min(calc((100vw - 9rem) * 0.7), calc(100vw - 27rem)), (min-width: 640px) calc(100vw - 9rem), calc(100vw - 7rem)"
                      className="object-contain lg:object-cover lg:object-top"
                    />
                  </div>
                  <div className="mx-auto w-4/5 max-w-xl pb-5 pt-7 text-center lg:w-full lg:py-6 lg:pl-12 lg:pr-8 lg:text-left">
                    <h2 className="text-3xl font-normal leading-tight text-primary-hover sm:text-4xl lg:text-[clamp(2.5rem,3.25vw,3rem)]">
                      {slide.title}
                    </h2>
                    <p className="mt-5 text-base font-normal leading-relaxed text-[#5C6664] lg:text-lg">
                      {slide.description}
                    </p>
                    <Button
                      asChild
                      className="mt-4 h-auto min-h-11 whitespace-normal px-4 py-2 text-base"
                    >
                      <Link href={slide.buttonLink} target={slide.target ? slide.target : "_self"}>{slide.buttonText}</Link>
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
        <CarouselPrevious className="absolute left-4 top-1/2 z-10 -translate-y-1/2 sm:left-8">
          <ChevronLeft className="" />
        </CarouselPrevious>
        <CarouselNext className="absolute right-4 top-1/2 z-10 -translate-y-1/2 sm:right-8">
          <IoIosArrowForward />
        </CarouselNext>
      </Carousel>
    </div>
  )
}

