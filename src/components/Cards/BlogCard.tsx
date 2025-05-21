"use client"

import Image from "next/image"
import cardimg from "@/../../Public/image/banner.jpg"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface BlogCardProps {
    imgSrc: string
    title: string
    description: string
    slug:string
}

const BlogCard = ({ imgSrc, title, description, slug }: BlogCardProps) => {

    console.log(imgSrc);
    
    

    return (
        <div className="bg-white rounded-[4px] shadow-md transition-shadow duration-300 hover:shadow-xl">
            <div>
                <Image
                    src={cardimg || "/placeholder.svg"}
                    alt="placeholder"
                    width={400}
                    height={100}
                    className="w-full h-[172px] object-cover"
                />
            </div>
            <div className="p-4">
                <h3 className="text-[18px] text-[#333333] font-semibold mt-3">
                    {title.length > 30 ? title.slice(0, 20) + "..." : title}
                </h3>
                <p className="text-sm text-[#A66A47] font-normal mt-1">01 Dec 2022</p>
                <p className="text-base text-[#333333] font-normal mt-3">{description}</p>
                <div className="flex items-end justify-between mt-6 w-full"> 
                    <Link href={`/blog/${slug}`} className="w-full"> 
                        <div className="w-full">
                            <Button className="w-full text-base font-medium text-[#FFFFFF] bg-[#A66A47] hover:bg-[#A66A47]/80 !py-3">
                                Read Blog
                            </Button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogCard

