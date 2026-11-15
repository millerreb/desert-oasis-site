import Image from "next/image"
import Link from "next/link"
import { formatPostDate, type BlogPost } from "@/lib/blogPosts"

// Photo for a blog post, or the practice logo on a sand-colored tile when it has none
export function BlogPostImage({ post, className, sizes }: { post: BlogPost; className: string; sizes: string }) {
    return (
        <div className={`relative overflow-hidden bg-[#F6EDE6] ${className}`}>
            {post.image ? (
                <Image src={post.image} alt="" fill sizes={sizes} className="object-cover" />
            ) : (
                <Image src="/image/Logo.png" alt="" fill sizes={sizes} className="object-contain p-10 opacity-90" />
            )}
        </div>
    )
}

const BlogCard = ({ post, headingLevel = "h3" }: { post: BlogPost; headingLevel?: "h2" | "h3" }) => {
    const Heading = headingLevel

    return (
        <article className="h-full flex flex-col bg-white rounded-[4px] shadow-md transition-shadow duration-300 hover:shadow-xl">
            <BlogPostImage post={post} className="w-full h-[172px] rounded-t-[4px]" sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw" />
            <div className="p-4 flex flex-col flex-1">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#8A5536] mt-2">{post.category}</p>
                <Heading className="text-[18px] text-[#333333] font-semibold mt-2 leading-snug">
                    <Link href={`/blog/${post.slug}`} className="hover:text-[#A66A47]">
                        {post.title}
                    </Link>
                </Heading>
                <p className="text-sm text-[#A66A47] font-normal mt-1">
                    <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                </p>
                <p className="text-base text-[#333333] font-normal mt-3 flex-1">{post.description}</p>
                <Link
                    href={`/blog/${post.slug}`}
                    aria-label={`Read article: ${post.title}`}
                    className="mt-6 w-full inline-flex items-center justify-center rounded-md text-base font-medium text-white bg-[#A66A47] hover:bg-[#A66A47]/80 py-3 transition-colors"
                >
                    Read Article
                </Link>
            </div>
        </article>
    )
}

export default BlogCard
