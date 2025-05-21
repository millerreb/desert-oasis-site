import { Button } from "@/components/ui/button"
import Image, { type StaticImageData } from "next/image"
import Link from "next/link"

interface ServicesCardProps {
    imgSrc: StaticImageData
    title: string
    description: string
    rout?: string // Changed from any to string for better type safety
}

const ServicesCard = ({ imgSrc, title, description, rout = "/" }: ServicesCardProps) => {
    return (
        <div className="border border-[#A66A47] rounded-[10px] p-5 group hover:bg-[#C7925B] transition-all duration-300">
            <div className="flex justify-center">
                <Image src={imgSrc || "/placeholder.svg"} alt={title} width={60} height={60} />
            </div>
            <h3 className="text-[24px] text-[#A66A47] font-semibold text-center mt-[30px] group-hover:text-white">{title}</h3>
            <p className="text-xl h-[72px] text-[#698B8F] font-normal text-center mt-5 group-hover:text-white">
                {description}
            </p>
            <div className="flex justify-center mt-[54px]">
                <Link href={rout} passHref>
                    <Button
                        className="bg-[#C7925B] text-base font-medium text-white px-[25px] py-[10px] mt-5 transition-all duration-300 
                    group-hover:bg-white group-hover:text-[#C7925B]"
                    >
                        Read More
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default ServicesCard

