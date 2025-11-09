"use client"
import { HiOutlineDownload } from "react-icons/hi";

export default function DownloadForms() {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-center text-[24px] md:text-[32px] font-semibold text-[#A66A47] mb-8">DOWNLOAD FORMS</h2>
            <div className="flex items-center gap-4">
                <span>
                    <HiOutlineDownload className="text-[#A66A47] w-5 h-5 md:w-7 md:h-7" />
                </span>
                <a className="text-[18px] md:text-[24px] text-[#A66A47] font-semibold underline" download href="/documents/DesertOasis-After-Surgery-Care.pdf">Post-Procedure Instructions</a>
            </div>
        </div>
    )
}

