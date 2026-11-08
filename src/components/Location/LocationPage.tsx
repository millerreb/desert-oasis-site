import Link from "next/link"
import { MapPin, Phone, Printer } from "lucide-react"
import Consultation from "@/components/Consultation/Consultation"
import {
    offices,
    WEEK,
    formatTime,
    openDaysText,
    PHONE,
    PHONE_LINK,
    FAX,
    BOOKING_URL,
    type Office,
} from "@/lib/site"

// Shared template for the Maricopa and Chandler office pages.
// Colors meet WCAG AA contrast: body #333333, links/buttons #8A5536, large headings #A66A47.

const serviceGroups = [
    {
        title: "Medical Dermatology",
        intro: "We treat every medical skin, hair and nail condition, including:",
        links: [
            { href: "/services/acne", label: "Acne" },
            { href: "/services/eczema", label: "Eczema" },
            { href: "/services/psoriasis", label: "Psoriasis" },
            { href: "/services/rosaceae", label: "Rosacea" },
            { href: "/services/warts", label: "Warts" },
            { href: "/services/hair-loss", label: "Hair loss" },
            { href: "/services/excessive-sweating", label: "Excessive sweating" },
            { href: "/services/allergic-reactions", label: "Skin allergies and rashes" },
        ],
    },
    {
        title: "Skin Cancer & Surgical Dermatology",
        intro:
            "Arizona has some of the highest UV exposure in the country, which makes regular skin checks especially important. Services include:",
        links: [
            { href: "/services/skin-cancer-screening", label: "Full-body skin cancer screenings" },
            { href: "/services/mohs-surgery", label: "Mohs surgery" },
            { href: "/services/excision", label: "Removal of skin cancers and growths" },
            { href: "/services/cyst-drainage", label: "Cyst drainage" },
        ],
    },
    {
        title: "Cosmetic Dermatology",
        intro: "Cosmetic treatments performed by a board-certified dermatologist, including dermal fillers and:",
        links: [
            { href: "/services/botox", label: "Botox and neurotoxins" },
            { href: "/services/microneedling", label: "Microneedling" },
            { href: "/services/chemical-peels", label: "Chemical peels" },
        ],
    },
]

const reasons = [
    "Board-certified dermatology for medical, surgical and cosmetic skin care",
    "Skin cancer care from screening through Mohs surgery in one practice",
    "Two offices, in Maricopa and Chandler",
    "Medicare, several AHCCCS plans and most major insurance accepted",
    "Online booking and secure text messaging",
]

export default function LocationPage({ office }: { office: Office }) {
    const other = offices.find((o) => o.key !== office.key)!
    const days = openDaysText(office)
    const hoursSentence = office.hours
        .map((h) => `${h.day} ${formatTime(h.opens)}–${formatTime(h.closes)}`)
        .join(", ")

    const faqs = [
        {
            q: `What are the hours at the ${office.city} office?`,
            a: `Our ${office.city} office is open ${hoursSentence}. We also see patients at our ${other.city} office on ${openDaysText(other)}.`,
        },
        {
            q: "Do I need a referral to see a dermatologist?",
            a: `Many insurance plans don't require one, but most HMO plans require a referral from your primary care provider before your visit. Call us at ${PHONE} and we can help you check your plan's requirements.`,
        },
        {
            q: "Do you accept Medicare and AHCCCS?",
            a: "Yes. We accept Medicare and several AHCCCS plans, along with most major insurance, including Aetna, Blue Cross Blue Shield, Cigna, Humana and UnitedHealthcare. Self-pay pricing is also available.",
        },
        {
            q: `How do I find the ${office.city} office?`,
            a: `We're at ${office.street} ${office.suite}, ${office.city}, AZ ${office.zip}.`,
        },
    ]

    return (
        <main>
            {/* Hero */}
            <section className="bg-[#A66A47]">
                <div className="container py-5 md:py-10">
                    <h1 className="w-full md:w-[750px] text-[25px] md:text-[40px] text-[#FFFFFF] font-semibold text-center mx-auto leading-[120%]">
                        Dermatologist in {office.city}, AZ
                    </h1>
                    <p className="w-full md:w-[650px] mx-auto text-sm md:text-base text-[#FFFFFF] font-semibold text-center mt-5 md:mt-[30px]">
                        Board-certified dermatology on {office.road}, open {days}.
                    </p>
                </div>
            </section>

            {/* Intro */}
            <section className="container mt-[60px]">
                <div className="max-w-[900px] mx-auto text-center space-y-5">
                    <p className="text-[18px] md:text-[20px] text-[#333333] leading-[160%]">
                        Desert Oasis Dermatology brings board-certified medical, surgical and cosmetic dermatology to {office.city}.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                        <a
                            href={BOOKING_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-[#8A5536] hover:bg-[#6F4329] text-white font-semibold px-8 py-3 rounded-md transition-colors"
                        >
                            Book an Appointment
                        </a>
                        <a
                            href={PHONE_LINK}
                            className="border-2 border-[#8A5536] text-[#8A5536] hover:bg-[#8A5536] hover:text-white font-semibold px-8 py-3 rounded-md transition-colors flex items-center justify-center gap-2"
                        >
                            <Phone className="h-5 w-5" /> Call {PHONE}
                        </a>
                    </div>
                </div>
            </section>

            {/* Hours & location */}
            <section className="container mt-[60px]">
                <h2 className="text-[28px] md:text-[32px] text-[#A66A47] font-semibold text-center">
                    {office.city} Office Hours & Location
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                    <div className="border border-[#C7925B] rounded-lg p-6 md:p-10">
                        <div className="flex items-start gap-3 text-[#333333]">
                            <MapPin className="h-6 w-6 shrink-0 mt-0.5 text-[#8A5536]" />
                            <address className="not-italic text-lg">
                                <span className="font-semibold block">Desert Oasis Dermatology</span>
                                {office.street} {office.suite}
                                <br />
                                {office.city}, AZ {office.zip}
                            </address>
                        </div>
                        <div className="flex items-center gap-3 text-[#333333] mt-4 text-lg">
                            <Phone className="h-5 w-5 shrink-0 text-[#8A5536]" />
                            <span>
                                Phone: <a href={PHONE_LINK} className="text-[#8A5536] underline font-semibold">{PHONE}</a>
                            </span>
                        </div>
                        <div className="flex items-center gap-3 text-[#333333] mt-2 text-lg">
                            <Printer className="h-5 w-5 shrink-0 text-[#8A5536]" />
                            <span>Fax: {FAX}</span>
                        </div>

                        <h3 className="text-[20px] text-[#333333] font-semibold mt-8 mb-2">Office hours</h3>
                        <div>
                            {WEEK.map((day) => {
                                const open = office.hours.find((h) => h.day === day)
                                return (
                                    <div
                                        key={day}
                                        className="flex justify-between py-2 border-b border-[#C7925B]/30 last:border-b-0 text-base md:text-lg"
                                    >
                                        <span className={open ? "text-[#333333] font-bold" : "text-[#595959]"}>{day}</span>
                                        <span className={open ? "text-[#333333] font-bold" : "text-[#595959]"}>
                                            {open ? `${formatTime(open.opens)} – ${formatTime(open.closes)}` : "Closed"}
                                        </span>
                                    </div>
                                )
                            })}
                        </div>

                        <a
                            href={office.directionsUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block mt-8 border border-[#8A5536] text-[#8A5536] hover:bg-[#8A5536] hover:text-white transition-colors px-6 py-2 rounded-sm text-sm font-semibold"
                        >
                            Get Directions
                        </a>
                    </div>

                    <div className="rounded-lg overflow-hidden border border-[#C7925B] min-h-[350px]">
                        <iframe
                            title={`Map of Desert Oasis Dermatology ${office.city} office`}
                            src={office.mapEmbedUrl}
                            className="w-full h-full min-h-[350px] border-0"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
                <p className="text-center text-base md:text-lg text-[#333333] mt-6">
                    Need a different day? We also see patients at our{" "}
                    <Link href={other.slug} className="text-[#8A5536] underline font-semibold">
                        {other.city} dermatology office
                    </Link>{" "}
                    on {openDaysText(other)}.
                </p>
            </section>

            {/* Services */}
            <section className="container mt-[60px]">
                <h2 className="text-[28px] md:text-[32px] text-[#A66A47] font-semibold text-center">
                    Dermatology Services in {office.city}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    {serviceGroups.map((group) => (
                        <div key={group.title} className="border border-[#C7925B] rounded-lg p-6">
                            <h3 className="text-[20px] text-[#333333] font-semibold">{group.title}</h3>
                            <p className="text-base text-[#333333] mt-3 leading-[160%]">{group.intro}</p>
                            <ul className="mt-3 space-y-2">
                                {group.links.map((link) => (
                                    <li key={link.href}>
                                        <Link href={link.href} className="text-[#8A5536] underline">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <p className="text-center mt-6">
                    <Link href="/services" className="text-[#8A5536] underline font-semibold text-lg">
                        See all dermatology services
                    </Link>
                </p>
            </section>

            {/* Why choose the practice */}
            <section className="container mt-[60px]">
                <h2 className="text-[28px] md:text-[32px] text-[#A66A47] font-semibold text-center">
                    Why {office.city} Patients Choose Desert Oasis Dermatology
                </h2>
                <ul className="max-w-[800px] mx-auto mt-6 space-y-3 list-disc pl-6 text-base md:text-lg text-[#333333]">
                    {reasons.map((r) => (
                        <li key={r}>{r}</li>
                    ))}
                </ul>
                <p className="text-center mt-6">
                    <Link href="/about" className="text-[#8A5536] underline font-semibold text-lg">
                        Meet our physician
                    </Link>
                </p>
            </section>

            {/* Insurance */}
            <section className="container mt-[60px]">
                <h2 className="text-[28px] md:text-[32px] text-[#A66A47] font-semibold text-center">Insurance Accepted</h2>
                <p className="max-w-[900px] mx-auto text-center text-base md:text-lg text-[#333333] mt-5 leading-[160%]">
                    We accept Medicare, several AHCCCS plans and most major insurance, including Aetna, Blue Cross Blue Shield,
                    Cigna, Humana and UnitedHealthcare. Self-pay pricing is also available. Most HMO plans require a referral from
                    your primary care provider before your visit.
                </p>
                <p className="text-center mt-4">
                    <Link href="/insurance-accepted" className="text-[#8A5536] underline font-semibold text-lg">
                        See the full list of insurance plans and self-pay prices
                    </Link>
                </p>
            </section>

            {/* Nearby */}
            <section className="container mt-[60px]">
                <h2 className="text-[28px] md:text-[32px] text-[#A66A47] font-semibold text-center">
                    Serving {office.city} and Nearby Communities
                </h2>
                <p className="max-w-[900px] mx-auto text-center text-base md:text-lg text-[#333333] mt-5 leading-[160%]">
                    Patients visit our {office.city} office from {office.nearby.slice(0, -1).join(", ")} and{" "}
                    {office.nearby[office.nearby.length - 1]}.
                </p>
            </section>

            {/* FAQ */}
            <section className="container mt-[60px] mb-[60px]">
                <h2 className="text-[28px] md:text-[32px] text-[#A66A47] font-semibold text-center">
                    Frequently Asked Questions
                </h2>
                <div className="max-w-[900px] mx-auto mt-8 space-y-6">
                    {faqs.map((f) => (
                        <div key={f.q}>
                            <h3 className="text-[20px] text-[#333333] font-semibold">{f.q}</h3>
                            <p className="text-base md:text-lg text-[#333333] mt-2 leading-[160%]">{f.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            <Consultation />
        </main>
    )
}
