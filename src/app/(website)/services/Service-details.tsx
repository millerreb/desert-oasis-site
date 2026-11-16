import Link from "next/link"
import { CalendarDays, ChevronDown, ChevronRight, MapPin, Phone } from "lucide-react"
import { getServiceById, type ServiceData } from "@/lib/mokdata"
import { getPostBySlug } from "@/lib/blogPosts"
import { BOOKING_URL, PHONE, PHONE_LINK, offices, openDaysText } from "@/lib/site"
import RichText from "@/components/Blog/RichText"
import Consultation from "@/components/Consultation/Consultation"

// The layout for every service page (/services/[id]). The words come from mokdata.ts.

const sectionId = (title: string) =>
    title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")

export default function ServicesDetailsCard({ serviceData }: { serviceData: ServiceData }) {
    const s = serviceData
    const related = s.related.map(getServiceById).filter((r): r is ServiceData => Boolean(r))
    const posts = (s.relatedPosts ?? []).map(getPostBySlug).filter((p) => p !== undefined)
    const officesHere = offices.filter((o) => !s.offices || s.offices.includes(o.key))

    return (
        <section>
            {/* Banner: breadcrumb, page title, short intro and booking buttons */}
            <div className="bg-[#A66A47] text-white">
                <div className="container py-8 md:py-12">
                    <nav aria-label="Breadcrumb" className="text-sm text-white/85">
                        <ol className="flex flex-wrap items-center gap-1">
                            <li><Link href="/" className="hover:underline">Home</Link></li>
                            <li aria-hidden="true"><ChevronRight className="h-4 w-4" /></li>
                            <li><Link href="/services" className="hover:underline">Services</Link></li>
                            <li aria-hidden="true"><ChevronRight className="h-4 w-4" /></li>
                            <li>
                                <Link href={`/services?category=${s.category}`} className="hover:underline">{s.category}</Link>
                            </li>
                        </ol>
                    </nav>
                    <h1 className="mt-4 text-[28px] md:text-[42px] font-semibold leading-[120%] max-w-[850px]">{s.serviceName}</h1>
                    <p className="mt-4 max-w-[760px] text-base md:text-lg leading-relaxed text-white/95">
                        <RichText text={s.intro} />
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                        <a
                            href={BOOKING_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded bg-white px-5 py-3 font-semibold text-[#8A5536] hover:bg-[#FBF6F2]"
                        >
                            <CalendarDays className="h-5 w-5" aria-hidden="true" />
                            Schedule Appointment
                        </a>
                        <a
                            href={PHONE_LINK}
                            className="inline-flex items-center gap-2 rounded border border-white px-5 py-3 font-semibold text-white hover:bg-white/10"
                        >
                            <Phone className="h-5 w-5" aria-hidden="true" />
                            Call {PHONE}
                        </a>
                    </div>
                </div>
            </div>

            <div className="container py-10 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_340px] gap-10 lg:gap-14 items-start">
                    {/* Main content */}
                    <article className="min-w-0">
                        {s.paragraphs.length > 3 && (
                            <nav aria-label="On this page" className="mb-10 rounded-lg border border-[#E8D9CC] bg-[#FBF6F2] p-5">
                                <p className="font-semibold text-[#333333]">On this page</p>
                                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                                    {s.paragraphs.map((p) => (
                                        <li key={p.title}>
                                            <a href={`#${sectionId(p.title)}`} className="text-[#8A5536] hover:underline">{p.title}</a>
                                        </li>
                                    ))}
                                    {s.faqs.length > 0 && (
                                        <li><a href="#faq" className="text-[#8A5536] hover:underline">Frequently asked questions</a></li>
                                    )}
                                </ul>
                            </nav>
                        )}

                        <div className="space-y-10 text-base md:text-[17px] text-[#333333]">
                            {s.paragraphs.map((p) => (
                                <div key={p.title} id={sectionId(p.title)} className="scroll-mt-28">
                                    <h2 className="text-[22px] md:text-[26px] font-semibold text-[#A66A47] leading-snug">{p.title}</h2>
                                    {p.content.split("\n\n").map((para, i) => (
                                        <p key={i} className="mt-4 leading-relaxed"><RichText text={para} /></p>
                                    ))}
                                    {p.bullets && (
                                        <ul className="mt-4 list-disc pl-6 space-y-2 leading-relaxed marker:text-[#C7925B]">
                                            {p.bullets.map((b, i) => <li key={i} className="pl-1"><RichText text={b} /></li>)}
                                        </ul>
                                    )}
                                    {p.after && <p className="mt-4 leading-relaxed"><RichText text={p.after} /></p>}
                                </div>
                            ))}
                        </div>

                        {s.faqs.length > 0 && (
                            <div id="faq" className="mt-14 scroll-mt-28">
                                <h2 className="text-[22px] md:text-[26px] font-semibold text-[#A66A47] leading-snug">Frequently asked questions</h2>
                                <div className="mt-5 divide-y divide-[#E8D9CC] rounded-lg border border-[#E8D9CC]">
                                    {s.faqs.map((f) => (
                                        <details key={f.q} className="group px-5 py-4" open>
                                            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-[#333333] [&::-webkit-details-marker]:hidden">
                                                <h3 className="text-base md:text-[17px]">{f.q}</h3>
                                                <ChevronDown className="mt-1 h-5 w-5 shrink-0 text-[#A66A47] transition-transform group-open:rotate-180" aria-hidden="true" />
                                            </summary>
                                            <p className="mt-3 leading-relaxed text-[#333333]"><RichText text={f.a} /></p>
                                        </details>
                                    ))}
                                </div>
                            </div>
                        )}

                        {(related.length > 0 || posts.length > 0) && (
                            <div className="mt-14 grid gap-6 sm:grid-cols-2">
                                {related.length > 0 && (
                                    <div className="rounded-lg bg-[#FBF6F2] p-5">
                                        <h2 className="text-lg font-semibold text-[#333333]">Related services</h2>
                                        <ul className="mt-3 space-y-2">
                                            {related.map((r) => (
                                                <li key={r.id}>
                                                    <Link href={`/services/${r.id}`} className="text-[#8A5536] hover:underline">{r.serviceName}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {posts.length > 0 && (
                                    <div className="rounded-lg bg-[#FBF6F2] p-5">
                                        <h2 className="text-lg font-semibold text-[#333333]">From our blog</h2>
                                        <ul className="mt-3 space-y-2">
                                            {posts.map((p) => (
                                                <li key={p!.slug}>
                                                    <Link href={`/blog/${p!.slug}`} className="text-[#8A5536] hover:underline">{p!.title}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        )}

                        <p className="mt-10 text-sm text-[#666666] italic">
                            This page is for general education and isn&apos;t a substitute for an exam or personal medical advice.
                            If you have a medical emergency, call 911.
                        </p>
                    </article>

                    {/* Sidebar: booking card. Stays in view on large screens. */}
                    <aside className="space-y-6 lg:sticky lg:top-[120px]">
                        <div className="rounded-lg border border-[#A66A47] p-5">
                            <h2 className="text-xl font-semibold text-[#A66A47]">{s.callToAction.heading}</h2>
                            <p className="mt-1 text-[#333333]">{s.callToAction.subheading}</p>
                            <a
                                href={BOOKING_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-4 flex w-full items-center justify-center gap-2 rounded bg-[#C7925B] px-5 py-3 font-semibold text-white hover:bg-[#C7925B]/85"
                            >
                                <CalendarDays className="h-5 w-5" aria-hidden="true" />
                                {s.callToAction.buttonText}
                            </a>
                            <a href={PHONE_LINK} className="mt-3 flex items-center justify-center gap-2 font-semibold text-[#8A5536] hover:underline">
                                <Phone className="h-4 w-4" aria-hidden="true" />
                                {PHONE}
                            </a>

                            <div className="mt-5 space-y-4 border-t border-[#E8D9CC] pt-4">
                                {s.offices && s.offices.length === 1 && (
                                    <p className="text-sm text-[#333333]">Offered at our {officesHere[0].city} office.</p>
                                )}
                                {officesHere.map((o) => (
                                    <div key={o.key} className="flex gap-3 text-sm text-[#333333]">
                                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#A66A47]" aria-hidden="true" />
                                        <div>
                                            <Link href={o.slug} className="font-semibold text-[#8A5536] hover:underline">{o.city} office</Link>
                                            <p>{o.street}, {o.suite}</p>
                                            <p>Patients seen {openDaysText(o)}</p>
                                        </div>
                                    </div>
                                ))}
                                <Link href="/insurance-accepted" className="block text-sm font-semibold text-[#8A5536] hover:underline">
                                    Insurance &amp; self-pay prices
                                </Link>
                            </div>
                        </div>

                    </aside>
                </div>
            </div>

            <Consultation />
        </section>
    )
}
