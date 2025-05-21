"use client"

import { useState } from "react"
import ServicesCard from "../Cards/ServicesCard"
import icon1 from "@/../../Public/icon/service-icon/services-icon-1.png"
import icon2 from "@/../../Public/icon/service-icon/services-icon-2.png"
import icon3 from "@/../../Public/icon/service-icon/services-icon-3.png"
import icon4 from "@/../../Public/icon/service-icon/services-icon-4.png"
import icon5 from "@/../../Public/icon/service-icon/services-icon-5.png"
import icon6 from "@/../../Public/icon/service-icon/services-icon-6.png"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"

const data = [
    {
        imgSrc: icon1,
        title: "Acne Treatment",
        description: "Customized treatments to clear your skin.",
        rout: "/services/acne",
    },
    {
        imgSrc: icon2,
        title: "Eczema",
        description: "Expert care to soothe and manage eczema.",
        rout: "/services/eczema",
    },
    {
        imgSrc: icon3,
        title: "Skin Cancer Screening",
        description: "Early detection with thorough examination.",
        rout: "/services/skin-cancer-screening",
    },
    {
        imgSrc: icon4,
        title: "Mohs Surgery",
        description: "Advanced surgical treatment ensuring complete removal with minimal scarring.",
        rout: "/services/mohs-surgery",
    },
    {
        imgSrc: icon5,
        title: "Botox & Neurotoxins",
        description: "Rejuvenate your appearance with minimally invasive cosmetic treatments.",
        rout: "/services/botox",
    },
    {
        imgSrc: icon6,
        title: "Chemical Peels",
        description: "Revitalize your skin with our customized treatments.",
        rout: "/services/chemical-peels",
    },
    {
        imgSrc: icon1,
        title: "Hand Dermatitis",
        description: "Comprehensive treatment for irritated and inflamed skin on the hands.",
        rout: "/services/hand-dermatitis",
    },
    {
        imgSrc: icon2,
        title: "Warts",
        description: "Effective solutions to remove and prevent warts.",
        rout: "/services/warts",
    },
    {
        imgSrc: icon3,
        title: "Excessive Sweating",
        description: "Advanced treatments to manage hyperhidrosis.",
        rout: "/services/excessive-sweating",
    },
    {
        imgSrc: icon4,
        title: "Hair Loss",
        description: "Personalized solutions for hair restoration and regrowth.",
        rout: "/services/hair-loss",
    },
    {
        imgSrc: icon5,
        title: "Dark Spots",
        description: "Treat and reduce pigmentation for a more even complexion.",
        rout: "/services/dark-spots",
    },
    {
        imgSrc: icon6,
        title: "Allergic Reaction on Skin",
        description: "Expert care for allergy-induced skin reactions.",
        rout: "services/allergic-reactions",
    },
    {
        imgSrc: icon1,
        title: "Molluscum Contagiosum",
        description: "Effective treatments to clear viral skin infections.",
        rout: "/services/molluscum",
    },
    {
        imgSrc: icon2,
        title: "Dandruff",
        description: "Targeted treatments for scalp health and flake reduction.",
        rout: "/services/dandruff",
    },
    {
        imgSrc: icon3,
        title: "Vitiligo",
        description: "Personalized care to manage skin pigmentation loss.",
        rout: "/services/vitiligo",
    },
    {
        imgSrc: icon4,
        title: "Psoriasis",
        description: "Advanced therapies to control and soothe psoriasis symptoms.",
        rout: "/services/psoriasis",
    },
    {
        imgSrc: icon5,
        title: "Rosacea",
        description: "Expert treatments to reduce redness and inflammation.",
        rout: "services/rosaceae",
    },
]

const OurServices = () => {
    const [showAll, setShowAll] = useState(false)

    // Display only the first 6 items or all items based on showAll state
    const displayedServices = showAll ? data : data.slice(0, 6)

    return (
        <section>
            <div className="container mt-[60px]">
                <h2 className="text-[32px] text-[#A66A47] font-semibold text-center">Our Services</h2>
                <p className="text-xl text-[#698B8F] font-normal text-center mt-5">
                    At Desert Oasis Dermatology, we offer a comprehensive range of treatments tailored to your skin care needs.
                    Explore our key services below.
                </p>
                <div className="flex gap-x-[50px] flex-wrap gap-y-[50px] mt-[60px]">
                    {displayedServices.map((item, index) => (
                        <div key={index} className="w-full md:w-[48%] lg:w-[30%]">
                            <ServicesCard imgSrc={item.imgSrc} title={item.title} description={item.description} rout={item.rout} />
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-[50px] pb-[60px]">
                    <Button
                        className="bg-[#C7925B] text-base font-bold text-white px-[94px] h-[52px] mt-5 hover:bg-[#C7925B]/80"
                        onClick={() => setShowAll(!showAll)}
                    >
                        {showAll ? "Show Less" : "See More"}
                        <span className="ml-2">
                            <ArrowRight />
                        </span>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default OurServices

