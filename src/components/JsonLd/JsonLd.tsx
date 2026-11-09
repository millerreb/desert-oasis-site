// Puts structured data (schema.org JSON-LD) into the page's code for search engines.
// Nothing is displayed to visitors.
export default function JsonLd({ data }: { data: object | object[] }) {
    return (
        <script
            type="application/ld+json"
            // "<" is escaped so the data can never close the script tag early
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
        />
    )
}
