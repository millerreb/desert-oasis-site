import Link from "next/link"
import { getOffice } from "@/lib/site"

// Homepage introduction: the page's main heading, with links to each office page.
export default function HomeIntro() {
    const maricopa = getOffice("maricopa")
    const chandler = getOffice("chandler")

    return (
        <section className="container mt-[60px]">
            <h1 className="text-[32px] text-[#A66A47] font-semibold text-center">
                Dermatology in Maricopa &amp; Chandler, AZ
            </h1>
            <p className="max-w-[900px] mx-auto text-xl text-[#4D6A6E] font-normal text-center mt-5 leading-[160%]">
                Desert Oasis Dermatology offers medical, surgical and cosmetic dermatology at two offices, in Maricopa
                and Chandler. Visit our{" "}
                <Link href={maricopa.slug} className="text-[#8A5536] underline font-semibold">
                    Maricopa office
                </Link>{" "}
                or{" "}
                <Link href={chandler.slug} className="text-[#8A5536] underline font-semibold">
                    Chandler office
                </Link>{" "}
                page for hours and directions.
            </p>
        </section>
    )
}
