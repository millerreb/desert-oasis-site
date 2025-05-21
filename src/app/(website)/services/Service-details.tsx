"use client"

import Image from "next/image"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { ServiceData } from "@/lib/mokdata"
import serviceimage from "@/../../Public/image/sevicesDetais.png"
import Consultation from "@/components/Consultation/Consultation"
import Link from "next/link"

export default function ServicesDetailsCard({ serviceData }: { serviceData: ServiceData }) {
    return (
        <section>
        <div className="container mx-auto px-4 py-8 mt-[60px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
                {/* Left column - Image */}
                <div className="relative w-full h-auto rounded-lg overflow-hidden text-center">
                    <Image
                        src={ serviceimage}
                        alt={serviceData.serviceName}
                        width={500}
                        height={400}
                        className="w-full h-auto object-cover rounded-lg"
                        priority
                    />

                    {/* Call to Action Section */}
                    <div className="mt-[60px] text-center ">
                        <h2 className="text-2xl md:text-[32px] font-semibold text-[#A66A47] mb-2 ">{serviceData.callToAction.heading}</h2>
                        <p className="text-xl text-[#A66A47] text-semibold mb-4">{serviceData.callToAction.subheading}</p>
                        <div className="flex items-center justify-center lg:justify-center gap-2 mb-6">
                            <Phone className="h-5 w-5 text-[#A67C52]" />
                            <span className="font-medium">Phone: {serviceData.callToAction.phone}</span>
                        </div>
                            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfenP9CvOOVj-0yIv5VJspemSxtuKM2IzFG1xWvwbiROKYXtg/viewform" >
                                <Button className="bg-[#C7925B] hover:bg-[#C7925B]/80 text-white px-6 py-3 rounded">
                                    {serviceData.callToAction.buttonText}
                                </Button>
                            </Link>
                    </div>
                </div>

                {/* Right column - Content */}
                <div className="space-y-6">
                    <h1 className="text-[25px] md:text-[32px] font-semibold text-[#A66A47]">{serviceData.serviceName}</h1>

                    {serviceData.paragraphs.map((paragraph, index) => (
                        <div key={index} className="space-y-2 !mt-[30px]">
                            <h2 className="text-[18px] font-semibold text-[#333333]">{paragraph.title}</h2>
                            <p className="text-[#333333] leading-relaxed  ">{paragraph.content}</p>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
        <Consultation />
        </section>
    )
}

