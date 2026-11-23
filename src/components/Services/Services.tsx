"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

export type TreatmentCategory = "Medical" | "Surgical" | "Cosmetic"

interface Treatment {
  id: string
  name: string
  description?: string
}

// The starting tab comes from the page address (?category=...), read on the server,
// so the list of services is in the page as soon as it loads.
export default function Services({ initialCategory = "Medical" }: { initialCategory?: TreatmentCategory }) {
  const [activeCategory, setActiveCategory] = useState<TreatmentCategory>(initialCategory)
  const router = useRouter()

  // Update the active tab when the address changes (e.g. the browser Back button)
  useEffect(() => {
    setActiveCategory(initialCategory)
  }, [initialCategory])

  const categories: Record<TreatmentCategory, Treatment[]> = {
    Medical: [
      { id: "skin-cancer-screening", name: "Skin Cancer Screening" },
      { id: "acne", name: "Acne" },
      { id: "eczema", name: "Eczema" },
      { id: "hand-dermatitis", name: "Hand Dermatitis" },
      { id: "warts", name: "Warts" },
      { id: "excessive-sweating", name: "Excessive Sweating" },
      { id: "hair-loss", name: "Hair Loss" },
      { id: "dark-spots", name: "Dark Spots" },
      { id: "allergic-reactions", name: "Skin Allergies" },
      { id: "molluscum", name: "Molluscum" },
      { id: "dandruff", name: "Dandruff" },
      { id: "vitiligo", name: "Vitiligo" },
      { id: "psoriasis", name: "Psoriasis" },
      { id: "rosaceae", name: "Rosacea" },
      { id: "actinic-keratosis", name: "Actinic Keratosis (Precancerous Spots)" },
      { id: "mole-evaluation", name: "Mole Evaluation" },
      { id: "rash-evaluation", name: "Rash Evaluation" },
      { id: "skin-infections", name: "Skin Infections" },
      { id: "nail-conditions", name: "Nail Conditions" },
      { id: "hidradenitis-suppurativa", name: "Hidradenitis Suppurativa" },
      { id: "pediatric-dermatology", name: "Pediatric Dermatology" },
    ],
    Surgical: [
      { id: "mohs-surgery", name: "Mohs Surgery" },
      { id: "excision", name: "Excision (Removal of Cancer or Growth)" },
      { id: "cyst-drainage", name: "Cyst Drainage" },
      { id: "skin-biopsy", name: "Skin Biopsy" },
      { id: "cryotherapy", name: "Cryotherapy (Liquid Nitrogen)" },
      { id: "benign-growth-removal", name: "Skin Tag & Benign Growth Removal" },
    ],
    Cosmetic: [
      { id: "botox", name: "Neurotoxins (Botox)" },
      { id: "chemical-peels", name: "Chemical Peels" },
      { id: "microneedling", name: "Microneedling (Acne Scars)" },
    ],
  }

  const handleCategoryChange = (category: TreatmentCategory) => {
    setActiveCategory(category)
    // Update URL with the selected category
    router.push(`/services?category=${category}`, { scroll: false })
  }

  return (
    <div className="container w-full px-4 py-8">
      {/* Category Tabs */}
      <div className="grid grid-cols-3 gap-2 mb-8 sm:gap-4 w-full lg:w-[900px] h-[40px] md:h-[60px] mx-auto">
        {(Object.keys(categories) as TreatmentCategory[]).map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={cn(
              "py-2 px-4 rounded text-center transition-colors text-sm md:text-xl font-semibold text-foreground",
              activeCategory === category ? "bg-primary text-white" : "bg-accent text-gray-800",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Treatment Options */}
      <div className="pb-[100px]">
        <div
          className={`grid ${["Cosmetic", "Surgical"].includes(activeCategory)
              ? "grid-cols-1 place-items-center"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            } gap-[30px] mt-[100px]`}
        >
          {categories[activeCategory].map((treatment) => (
            <Link
              key={treatment.id}
              href={`/services/${treatment.id}`}
              className="block border rounded py-[15.5px] w-full sm:w-[300px]  xl:w-[350px] text-center hover:border transition-colors text-base font-semibold text-foreground mx-auto"
            >
              <span className="text-sm sm:text-base">{treatment.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

