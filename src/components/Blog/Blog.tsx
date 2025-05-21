
import BlogCard from "@/components/Cards/BlogCard"
import Header from "@/components/Headers/Header"

// This would typically come from a database or API
const data = [
    {
        slug: "the-ultimate-skincare-routine",
        imgSrc: "/images/blog1.png",
        title: "The Ultimate Skincare Routine",
        description: "Discover the best skincare routine for glowing and healthy skin.",
    },
    {
        slug: "top-5-acne-fighting-ingredients",
        imgSrc: "/images/blog2.png",
        title: "Top 5 Acne-Fighting Ingredients",
        description: "Learn about the most effective ingredients to combat acne.",
    },
    {
        slug: "how-to-keep-your-skin-hydrated",
        imgSrc: "/images/blog3.png",
        title: "How to Keep Your Skin Hydrated",
        description: "Expert tips on maintaining skin hydration throughout the year.",
    },
    {
        slug: "the-benefits-of-anti-aging-treatments",
        imgSrc: "/images/blog4.png",
        title: "The Benefits of Anti-Aging Treatments",
        description: "Explore the latest anti-aging treatments and their effectiveness.",
    },
    {
        slug: "natural-remedies-for-glowing-skin",
        imgSrc: "/images/blog5.png",
        title: "Natural Remedies for Glowing Skin",
        description: "Try these natural skincare remedies for a radiant complexion.",
    },
    {
        slug: "understanding-your-skin-type",
        imgSrc: "/images/blog6.png",
        title: "Understanding Your Skin Type",
        description: "A guide to identifying your skin type and the best products for it.",
    },
    {
        slug: "the-benefits-of-anti-aging-treatments-2",
        imgSrc: "/images/blog4.png",
        title: "The Benefits of Anti-Aging Treatments",
        description: "Explore the latest anti-aging treatments and their effectiveness.",
    },
    {
        slug: "natural-remedies-for-glowing-skin-2",
        imgSrc: "/images/blog5.png",
        title: "Natural Remedies for Glowing Skin",
        description: "Try these natural skincare remedies for a radiant complexion.",
    },
    {
        slug: "understanding-your-skin-type-2",
        imgSrc: "/images/blog6.png",
        title: "Understanding Your Skin Type",
        description: "A guide to identifying your skin type and the best products for it.",
    },
]

const Blog = () => {
    return (
        <section className="">
            <Header
                title="Blog Articles"
                subtitle="Stay informed with the latest insights on skin care, treatments, and wellness from our experts."
            />
            <div className="container">
                <div className="flex flex-wrap gap-y-[50px] justify-between mt-[60px]">
                    {data.map((item, index) => (
                        <div className="w-full md:w-[48%] lg:w-[30%]" key={index}>
                           
                            <BlogCard imgSrc={item.imgSrc} title={item.title} description={item.description} slug={item.slug}  />
                           
                        </div>
                    ))}

                    <div className="w-full md:w-[30%]"> </div>
                    <div className="w-full md:w-[30%]"> </div>
                </div>
            </div>
        </section>
    )
}

export default Blog

