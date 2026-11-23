import Link from "next/link"
import { getOffice } from "@/lib/site"

// Homepage introduction: the page's main heading, with links to each office page.
export default function HomeIntro() {
    const maricopa = getOffice("maricopa")
    const chandler = getOffice("chandler")

    return (
        <section className="container mt-6 md:mt-8">
            <h1 className="text-center text-[2rem] font-normal leading-tight text-foreground lg:text-[2.25rem]">
                Dermatology in Maricopa &amp; Chandler, AZ
            </h1>
            <p className="max-w-[900px] mx-auto text-xl text-muted-foreground font-normal text-center mt-5 leading-[160%]">
                Desert Oasis Dermatology offers medical, surgical and cosmetic dermatology at two offices, in Maricopa
                and Chandler. Visit our{" "}
                <Link href={maricopa.slug} className="font-semibold text-primary-hover underline underline-offset-4">
                    Maricopa office
                </Link>{" "}
                or{" "}
                <Link href={chandler.slug} className="font-semibold text-primary-hover underline underline-offset-4">
                    Chandler office
                </Link>{" "}
                page for hours and directions.
            </p>
        </section>
    )
}
