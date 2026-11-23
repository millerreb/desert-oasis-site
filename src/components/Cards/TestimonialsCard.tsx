
import { Carousel, CarouselContent, CarouselItem, } from "@/components/ui/carousel"
import { ArrowRight } from "lucide-react"
import { Button } from "../ui/button"
import Link from "next/link"
import ReviewCard from "./ReviewCard"
import { featuredReviews } from "@/lib/reviews"

// Homepage testimonials carousel. Shows the reviews marked featured: true in src/lib/reviews.ts.
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
                    {featuredReviews.map((review) => (
                        <CarouselItem key={review.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
                            <ReviewCard review={review} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            <div className='flex justify-center mt-[50px] pb-[60px]'>
                <Link href="/reviews">
                    <Button className='bg-primary text-base font-bold text-white px-[94px] h-[52px] mt-5 hover:bg-primary-hover '>
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
