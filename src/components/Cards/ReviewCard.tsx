import { Star } from "lucide-react"
import { officeLocation, type Review } from "@/lib/reviews"

// One patient review: five stars, the review text, and the reviewer's name and office.
// Used on /reviews and in the homepage testimonials carousel.
export default function ReviewCard({ review }: { review: Review }) {
    return (
        <figure className="border border-[#A66A47] rounded-lg bg-white p-6 flex flex-col h-full hover:shadow-4xl hover:border-transparent duration-500 transition-all">
            <div className="flex items-center mb-4" aria-label="5 out of 5 stars" role="img">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} aria-hidden="true" className="w-5 h-5 text-[#A66A47] fill-[#A66A47]" />
                ))}
            </div>
            <blockquote className="text-[#333333] flex-grow mb-4">{review.text}</blockquote>
            <figcaption className="text-base text-[#A66A47] font-normal">
                {review.name}, {officeLocation(review.office)}
            </figcaption>
        </figure>
    )
}
