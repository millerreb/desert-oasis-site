import TestimonialCarousel from "../Cards/TestimonialsCard";


export default function Testimonials() {
    return (
        <main className="container mt-[60px]">
            <h2 className='text-[32px] text-[#A66A47] font-semibold text-center'>Patient Testimonials</h2>
            <p className='text-xl text-[#698B8F] font-normal text-center mt-5'>Hear what our patients have to say about their experience at Desert Oasis Dermatology.</p>
            <TestimonialCarousel />
        </main>
    )
}

