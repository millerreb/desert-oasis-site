import TestimonialCarousel from "../Cards/TestimonialsCard";


export default function Testimonials() {
    return (
        <section className="container mt-[60px]">
            <h2 className='text-center text-[32px] font-normal text-primary-hover'>Patient Testimonials</h2>
            <p className='text-xl text-primary font-normal text-center mt-5'>Hear what our patients have to say about their experience at Desert Oasis Dermatology.</p>
            <TestimonialCarousel />
        </section>
    )
}

