
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, } from "@/components/ui/carousel"
import { ArrowRight, Star } from "lucide-react"
// import Image from "next/image"
// import reveiwimge from "@/../../Public/image/reveiw-image.png"
import { Button } from "../ui/button"
import Link from "next/link"

interface TestimonialProps {
    rating: number
    quote: string
    name: string
    location: string
    avatarSrc?: string
}

const testimonials: TestimonialProps[] = [
    {
        rating: 5,
        quote:
            "Dr. Lavian's expertise and compassionate approach immediately put me at ease during my skin cancer screening. I felt well-informed and truly cared for every step of the way.",
        name: "Sarah",
        location: "AZ",
        avatarSrc: undefined,
    },
    {
        rating: 5,
        quote:
            "Dr. Lavian removed my skin cancer with precision and care, and the scar is barely visible. I’m so grateful to have found a dermatologist I can trust with my health and peace of mind.",
        name: "Josh",
        location: "AZ",
        avatarSrc: "/placeholder.svg?height=40&width=40",
    },
    {
        rating: 5,
        quote:
            "Dr. Lavian's expertise and compassionate approach immediately put me at ease during my skin cancer screening. I felt well-informed and truly cared for every step of the way.",
        name: "Sarah",
        location: "AZ",
        avatarSrc: "/placeholder.svg?height=40&width=40",
    },
    {
        rating: 5,
        quote:
            "The care I received was exceptional. Dr. Lavian took the time to explain everything thoroughly and answer all my questions.",
        name: "Michael",
        location: "AZ",
        avatarSrc: "/placeholder.svg?height=40&width=40",
    },
    {
        rating: 5,
        quote:
            "My acne had been a struggle for years, but Dr. Lavian created a treatment plan that finally cleared my skin. I wish I'd come here sooner!",
        name: "Jessica",
        location: "AZ",
        avatarSrc: "/placeholder.svg?height=40&width=40",
    },
]

function TestimonialCard({ rating, quote, name, location}: TestimonialProps) {
    return (
        <Card className="border border-[#A66A47] rounded-lg h-full hover:shadow-4xl hover:border-transparent duration-500 transition-all">

            <CardContent className="p-6 flex flex-col h-full">
                <div className="flex gap-x-7">
                    {/* <Image src={reveiwimge} alt="Avatar" width={40} height={40} className="w-10 h-10" /> */}
                    <div>
                        <div className="flex items-center mb-4">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} className={`w-5 h-5 ${i < rating ? "text-[#A66A47] fill-[#A66A47]" : "text-gray-300"}`} />
                            ))}
                        </div>
                        <p className="text-gray-700 flex-grow mb-4 h-[220px] md:h-[168px]">{quote}</p>  
                        <p className="text-base text-[#A66A47] font-normal">{name}, {location}</p>
                 </div>
                </div>
            </CardContent>
        </Card>
        
    )
}

export default function TestimonialCarousel() {
    return (
        <div className="py-12 px-4 md:px-6">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full"
            >
                <CarouselContent>
                    {testimonials.map((testimonial, index) => (
                        <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                            <TestimonialCard {...testimonial} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/* <div className="flex justify-center mt-8">
                    <CarouselPrevious className="relative mr-2  transform-none" />
                    <CarouselNext className="relative ml-2  transform-none" />
                </div> */}
            </Carousel>

            <div className='flex justify-center mt-[50px] pb-[60px]'>
                <Link href="/future-comming-soon">
                    <Button className='bg-[#C7925B] text-base font-bold text-white px-[94px] h-[52px] mt-5 hover:bg-[#C7925B]/80 '>
                        See All
                        <span>
                            <ArrowRight />
                        </span>
                    </Button>
                </Link>
            </div>
        </div>
    )
}

