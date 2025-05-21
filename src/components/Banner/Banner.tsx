"use client"

import { useState, useEffect } from "react"
import Image, { type StaticImageData } from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ChevronLeft } from "lucide-react"
import { IoIosArrowForward } from "react-icons/io"
import banner from "@/../../Public/image/amt.jpg"
import banner2 from "@/../../Public/image/banner222.jpg"
import banner3 from "@/../../Public/image/new banner 333.jpg"
import banner4 from "@/../../Public/image/banner45.jpg"
import banner5 from "@/../../Public/image/banner26.jpg"

interface SlideContent {
  id: number
  title: string
  description: string
  image: StaticImageData
  buttonText: string
  buttonLink: string
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
      buttonLink: "https://forms.gle/nyXeSuvA7sgZ7juz9",
    },
    {
      id: 2,
      title: "Discover Your Skin's Oasis",
      description:
        "We provide expert care in a calming environment, helping you achieve glowing, healthy skin with tailored treatments.",
      image: banner2,
      buttonText: "Book Your Visit Today",
      buttonLink: "https://forms.gle/nyXeSuvA7sgZ7juz9",
    },
    {
      id: 3,
      title: "Say Goodbye to Skin Concerns",
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
    <div className="relative w-full overflow-hidden">
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="relative">
              <div className="relative w-full h-[600px] md:h-[900px]  ">
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  fill
                  priority
                  className="object-cover  "
                />
                <div className="absolute inset-0 bg-white/15" />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center md:px-8 lg:px-16 ">
                  <div className="absolute inset-0 w-full h-full bg-white/60 backdrop:blur-md"></div>
                  <div className=" z-40  ">
                    <h1 className="text-[25px] md:text-[40px] lg:text-[60px] text-[#A66A47] font-bold mt-10 md:mt-0">
                      {slide.title}
                    </h1>
                    <p className="text-sm px-4 md:text-[18px] lg:text-xl text-[#A66A47] font-medium mt-[50px] md:mt-10">
                      {slide.description}
                    </p>
                    <Button
                      asChild
                      className="bg-[#A66A47] w-[250px] md:w-[300px] h-[40px] md:h-[54px] hover:bg-[#A66A47]/80 mt-10 md:mt-[66px] py-4 text-base md:text-[18px]"
                    >
                      <Link href={slide.buttonLink}>{slide.buttonText}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 md:left-4 top-[52%] md:top-1/2  z-10 -translate-y-1/2 ">
          <ChevronLeft className="" />
        </CarouselPrevious>
        <CarouselNext className="absolute right-0 md:right-4 top-[52%] md:top-1/2  z-10 -translate-y-1/2  ">
          <IoIosArrowForward />
        </CarouselNext>
      </Carousel>
    </div>
  )
}

