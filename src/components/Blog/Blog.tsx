import BlogCard from "@/components/Cards/BlogCard"
import Header from "@/components/Headers/Header"
import { blogCategories, blogPosts, postsByDate } from "@/lib/blogPosts"

// The blog page: every post from blogPosts.ts, grouped by category, newest first.
const Blog = () => {
    const sections = blogCategories
        .map((category) => ({ category, posts: postsByDate(blogPosts.filter((p) => p.category === category)) }))
        .filter((section) => section.posts.length > 0)

    return (
        <section>
            <Header
                title="Blog Articles"
                subtitle="Straightforward answers to the skin questions our patients ask most, written by a board-certified dermatologist."
            />
            <div className="container pb-[60px] md:pb-[100px]">
                {sections.map(({ category, posts }) => (
                    <div key={category} className="mt-[60px]">
                        <h2 className="text-[24px] md:text-[32px] font-semibold text-primary">{category}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-6">
                            {posts.map((post) => (
                                <BlogCard key={post.slug} post={post} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Blog
