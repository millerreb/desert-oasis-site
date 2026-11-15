import Link from "next/link"
import type { ReactNode } from "react"
import { BOOKING_URL } from "@/lib/site"

// Turns the simple formatting used in blogPosts.ts into page text:
//   **bold**   *italic*   [link text](/path)   [link text](booking)
// A backslash keeps a character literal, e.g. \* shows an asterisk.

const TOKEN = /\\([*[\]\\])|\*\*(.+?)\*\*|\*(.+?)\*|\[(.+?)\]\((.+?)\)/g

function parse(text: string, keyPrefix: string): ReactNode[] {
    const out: ReactNode[] = []
    let last = 0
    let match: RegExpExecArray | null
    let i = 0
    // fresh copy each call: parse() is recursive and a shared regex would lose its place
    const re = new RegExp(TOKEN.source, "g")

    while ((match = re.exec(text)) !== null) {
        if (match.index > last) out.push(text.slice(last, match.index))
        const key = `${keyPrefix}-${i++}`
        const [, escaped, bold, italic, linkText, href] = match

        if (escaped) {
            out.push(escaped)
        } else if (bold) {
            out.push(<strong key={key} className="font-semibold">{parse(bold, key)}</strong>)
        } else if (italic) {
            out.push(<em key={key}>{parse(italic, key)}</em>)
        } else if (linkText) {
            const linkClass = "text-[#8A5536] underline underline-offset-2 hover:text-[#A66A47]"
            if (href === "booking") {
                out.push(
                    <a key={key} href={BOOKING_URL} target="_blank" rel="noreferrer" className={linkClass}>
                        {parse(linkText, key)}
                    </a>
                )
            } else if (href.startsWith("/")) {
                out.push(<Link key={key} href={href} className={linkClass}>{parse(linkText, key)}</Link>)
            } else {
                out.push(
                    <a key={key} href={href} target="_blank" rel="noreferrer" className={linkClass}>
                        {parse(linkText, key)}
                    </a>
                )
            }
        }
        last = re.lastIndex
    }
    if (last < text.length) out.push(text.slice(last))
    return out
}

export default function RichText({ text }: { text: string }) {
    return <>{parse(text, "rt")}</>
}

// Plain text without formatting marks, for search-engine data
export function plainText(text: string): string {
    return text
        .replace(/\[(.+?)\]\((.+?)\)/g, "$1")
        .replace(/\*\*(.+?)\*\*/g, "$1")
        .replace(/\*(.+?)\*/g, "$1")
        .replace(/\\([*[\]\\])/g, "$1")
}
