import Header from '@/components/Headers/Header'
import ReviewCard from '@/components/Cards/ReviewCard'
import React from 'react'
import { ArrowRight } from 'lucide-react'
import { pageMeta } from "@/lib/seo";
import { getOffice, type Office } from '@/lib/site'
import { googleReviewsUrl, reviewsFor } from '@/lib/reviews'

export const metadata = pageMeta("/reviews");

// The order the offices appear on the page
const officeOrder: Office["key"][] = ["chandler", "maricopa"]

const page = () => {
    return (
        <section>
            <Header
                title="Patient Reviews"
                subtitle="Hear what our patients have to say about their experience at Desert Oasis Dermatology."
            />
            <div className='container py-[60px] md:py-[80px] space-y-[60px] md:space-y-[80px]'>
                {officeOrder.map((key) => {
                    const office = getOffice(key)
                    return (
                        <div key={key}>
                            <h2 className='text-[28px] md:text-[32px] text-primary font-semibold text-center'>
                                {office.name}
                            </h2>
                            <p className='text-base md:text-lg text-foreground text-center mt-2'>
                                {office.street}, {office.city}, AZ
                            </p>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
                                {reviewsFor(key).map((review) => (
                                    <ReviewCard key={review.name} review={review} />
                                ))}
                            </div>
                            <div className='flex justify-center mt-8'>
                                <a
                                    href={googleReviewsUrl(key)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white text-base font-bold px-8 h-[52px] rounded-md transition-colors'
                                >
                                    Read all {office.city} reviews on Google
                                    <ArrowRight className='w-5 h-5' aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default page
