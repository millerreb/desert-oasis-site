import type { MetadataRoute } from "next"
import { SITE_URL, pagePaths, isHiddenFromSearch } from "@/lib/seo"
import { servicesData } from "@/lib/mokdata"

// Served at /sitemap.xml: the list of pages Google should index.
// Built automatically: every page with an entry in seo.ts plus every service page,
// minus anything on the hiddenFromSearch list. New service pages are added on their own.
export default function sitemap(): MetadataRoute.Sitemap {
    const paths = [...pagePaths, ...servicesData.map((service) => `/services/${service.id}`)]

    return paths
        .filter((path) => !isHiddenFromSearch(path))
        .map((path) => ({ url: new URL(path, SITE_URL).toString() }))
}
