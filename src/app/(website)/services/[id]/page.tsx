"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { getServiceById, type ServiceData } from "@/lib/mokdata"
import ServicesDetailsCard from "@/app/(website)/services/Service-details"

export default function ServiceDetailsPage() {
    const params = useParams()
    const [serviceData, setServiceData] = useState<ServiceData | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if (params.id) {
            const id = Array.isArray(params.id) ? params.id[0] : params.id
            const data = getServiceById(id)

            if (data) {
                setServiceData(data)
            } else {
                setError("Service not found")
            }

            setLoading(false)
        }
    }, [params.id])

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <p>Loading service details...</p>
            </div>
        )
    }

    if (error || !serviceData) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[400px]">
                <h2 className="text-2xl font-semibold text-[#A67C52] mb-4">Service Not Found</h2>
                <p className="text-gray-600">The requested service could not be found.</p>
            </div>
        )
    }

    return <ServicesDetailsCard serviceData={serviceData} />
}

