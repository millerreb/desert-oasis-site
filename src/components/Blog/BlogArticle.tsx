import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Header from "@/components/Headers/Header"
import Consultation from "@/components/Consultation/Consultation"
import BlogCard, { BlogPostImage } from "@/components/Cards/BlogCard"
import RichText from "@/components/Blog/RichText"
import { BLOG_AUTHOR, formatPostDate, relatedPosts, type BlogBlock, type BlogPost } from "@/lib/blogPosts"

function Block({ block }: { block: BlogBlock }) {
    switch (block.type) {
        case "h2":
            return <h2 className="text-[22px] md:text-[26px] font-semibold text-[#A66A47] leading-snug !mt-10">{block.text}</h2>
        case "h3":
            return <h3 className="text-[18px] md:text-[20px] font-semibold text-[#333333] leading-snug !mt-8">{block.text}</h3>
        case "p":
            return <p className="text-[#333333] leading-relaxed"><RichText text={block.text} /></p>
        case "ul":
            return (
                <ul className="list-disc pl-6 space-y-2 text-[#333333] leading-relaxed marker:text-[#C7925B]">
                    {block.items.map((item, i) => <li key={i} className="pl-1"><RichText text={item} /></li>)}
                </ul>
            )
        case "ol":
            return (
                <ol className="list-decimal pl-6 space-y-2 text-[#333333] leading-relaxed marker:text-[#A66A47] marker:font-semibold">
                    {block.items.map((item, i) => <li key={i} className="pl-1"><RichText text={item} /></li>)}
                </ol>
            )
        case "table":
            return (
                <div className="overflow-x-auto">
                    <table className="w-full max-w-[560px] border-collapse text-left text-[#333333]">
                        <thead>
                            <tr className="bg-[#A66A47] text-white">
                                {block.head.map((cell, i) => <th key={i} scope="col" className="px-4 py-3 font-semibold">{cell}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {block.rows.map((row, r) => (
                                <tr key={r} className="border-b border-[#E8D9CC] even:bg-[#FBF6F2]">
                                    {row.map((cell, c) => <td key={c} className="px-4 py-3"><RichText text={cell} /></td>)}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )
    }
}

export default function BlogArticle({ post }: { post: BlogPost }) {
    const more = relatedPosts(post)

    return (
        <section>
            <Header title={post.title} />

            <div className="container py-[40px] md:py-[60px]">
                <article className="max-w-[780px] mx-auto">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-[#8A5536] hover:text-[#A66A47]">
                        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                        All articles
                    </Link>

                    <p className="mt-5 text-sm text-[#555555] flex flex-wrap gap-x-2 gap-y-1">
                        <span>
                            By{" "}
                            <Link href={BLOG_AUTHOR.url} className="font-semibold text-[#A66A47] hover:underline">
                                {BLOG_AUTHOR.name}
                            </Link>
                        </span>
                        <span aria-hidden="true">·</span>
                        <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                        <span aria-hidden="true">·</span>
                        <span>{post.category}</span>
                    </p>

                    {post.image && (
                        <BlogPostImage post={post} className="mt-6 w-full aspect-[16/9] rounded-lg" sizes="(min-width: 800px) 780px, 100vw" />
                    )}

                    <div className="mt-8 space-y-5 text-base md:text-[17px]">
                        {post.blocks.map((block, i) => <Block key={i} block={block} />)}
                    </div>

                    <p className="mt-12 text-sm text-[#666666] italic">
                        This article is for general education and isn&apos;t a substitute for an exam or personal medical advice.
                    </p>
                </article>

                {more.length > 0 && (
                    <div className="mt-[60px] md:mt-[80px]">
                        <h2 className="text-[24px] md:text-[32px] font-semibold text-[#A66A47] text-center">More from our blog</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-8">
                            {more.map((p) => <BlogCard key={p.slug} post={p} />)}
                        </div>
                    </div>
                )}
            </div>

            <Consultation />
        </section>
    )
}
