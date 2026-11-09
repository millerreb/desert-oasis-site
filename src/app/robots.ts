import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/seo"

// Served at /robots.txt: welcomes search engines and tells them where the sitemap is.
// Pages are hidden from search with the hiddenFromSearch list in seo.ts, not here,
// because blocking a page in robots.txt stops Google from seeing its "hidden" tag.
export default function robots(): MetadataRoute.Robots {
    return {
        rules: { userAgent: "*", allow: "/" },
        sitemap: new URL("/sitemap.xml", SITE_URL).toString(),
    }
}
