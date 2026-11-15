import type { MetadataRoute } from "next"
import { SITE_URL, pagePaths, isHiddenFromSearch } from "@/lib/seo"
import { servicesData } from "@/lib/mokdata"
import { blogPosts } from "@/lib/blogPosts"

// Served at /sitemap.xml: the list of pages Google should index.
// Built automatically: every page with an entry in seo.ts plus every service page and blog post,
// minus anything on the hiddenFromSearch list. New service pages and blog posts are added on their own.
export default function sitemap(): MetadataRoute.Sitemap {
    const paths = [
        ...pagePaths,
        ...servicesData.map((service) => `/services/${service.id}`),
        ...blogPosts.map((post) => `/blog/${post.slug}`),
    ]

    return paths
        .filter((path) => !isHiddenFromSearch(path))
        .map((path) => ({ url: new URL(path, SITE_URL).toString() }))
}
