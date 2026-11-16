import { HiOutlineDownload } from "react-icons/hi";

// Patient handouts, served from public/documents.
// To add one: put the PDF in public/documents and add a line below with its file name.
const formGroups = [
    {
        title: "Aftercare Instructions",
        forms: [
            { label: "Post-Surgery Wound Care Instructions", file: "DesertOasis-After-Surgery-Care.pdf" },
            { label: "Skin Biopsy Aftercare", file: "Skin-Biopsy-Aftercare.pdf" },
            { label: "Liquid Nitrogen (Cryotherapy) Aftercare", file: "Liquid-Nitrogen-Cryotherapy-Aftercare.pdf" },
            { label: "Cantharidin Aftercare", file: "Cantharidin-Aftercare.pdf" },
        ],
    },
    {
        title: "Treatment & Skin Care Guides",
        forms: [
            { label: "Topical 5-FU Cream Patient Guide", file: "5-FU-Cream-Patient-Guide.pdf" },
            { label: "Sensitive Skin Care Guide", file: "Sensitive-Skin-Care-Guide.pdf" },
        ],
    },
];

export default function DownloadForms() {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-center text-[24px] md:text-[32px] font-semibold text-[#A66A47] mb-8">DOWNLOAD FORMS</h2>
            <div className="space-y-10">
                {formGroups.map((group) => (
                    <div key={group.title}>
                        <h3 className="text-[20px] md:text-[24px] font-semibold text-[#333333] mb-4">{group.title}</h3>
                        <ul className="space-y-4">
                            {group.forms.map((form) => (
                                <li key={form.file} className="flex items-center gap-4">
                                    <HiOutlineDownload className="shrink-0 text-[#A66A47] w-5 h-5 md:w-7 md:h-7" aria-hidden="true" />
                                    <a
                                        className="text-[18px] md:text-[22px] text-[#A66A47] font-semibold underline hover:text-[#8A5536]"
                                        href={`/documents/${form.file}`}
                                        download
                                    >
                                        {form.label} <span className="text-sm md:text-base font-normal">(PDF)</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}
