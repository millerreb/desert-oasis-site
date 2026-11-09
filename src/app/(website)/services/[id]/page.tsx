import { notFound } from "next/navigation"
import { getServiceById, servicesData } from "@/lib/mokdata"
import ServicesDetailsCard from "@/app/(website)/services/Service-details"

// Build every service page ahead of time, so its full content is in the page
// as soon as it loads (for patients and for Google).
export function generateStaticParams() {
    return servicesData.map((service) => ({ id: service.id }))
}

// Any address that isn't one of the services above returns a proper "404 not found".
export const dynamicParams = false

export default function ServiceDetailsPage({ params }: { params: { id: string } }) {
    const serviceData = getServiceById(params.id)

    if (!serviceData) {
        notFound()
    }

    return <ServicesDetailsCard serviceData={serviceData} />
}
