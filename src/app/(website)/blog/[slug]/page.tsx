import { notFound } from "next/navigation"
import BlogArticle from "@/components/Blog/BlogArticle"
import JsonLd from "@/components/JsonLd/JsonLd"
import { blogPosts, getPostBySlug } from "@/lib/blogPosts"
import { blogPostMeta } from "@/lib/seo"
import { blogPostingSchema } from "@/lib/schema"

// Build every article ahead of time, so its full text is in the page as soon as it loads.
export function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }))
}

// Any address that isn't one of the posts returns a proper "404 not found".
export const dynamicParams = false

export function generateMetadata({ params }: { params: { slug: string } }) {
    return blogPostMeta(params.slug)
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug)
    if (!post) notFound()

    return (
        <>
            <JsonLd data={blogPostingSchema(post)} />
            <BlogArticle post={post} />
        </>
    )
}
