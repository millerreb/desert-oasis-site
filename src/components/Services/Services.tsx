"use client"

import { useState, useEffect, Suspense } from "react"
import { cn } from "@/lib/utils"
import { useRouter, useSearchParams } from "next/navigation"

type TreatmentCategory = "Medical" | "Surgical" | "Cosmetic"

interface Treatment {
  id: string
  name: string
  description?: string
}

// Create a separate component that uses useSearchParams
function ServicesContent() {
  const [activeCategory, setActiveCategory] = useState<TreatmentCategory>("Medical")
  const router = useRouter()
  const searchParams = useSearchParams()

  // Update active category when URL query parameter changes
  useEffect(() => {
    const categoryParam = searchParams.get("category") as TreatmentCategory
    if (categoryParam && ["Medical", "Surgical", "Cosmetic"].includes(categoryParam)) {
      setActiveCategory(categoryParam)
    }
  }, [searchParams])

  const categories: Record<TreatmentCategory, Treatment[]> = {
    Medical: [
      { id: "skin-cancer-screening", name: "Skin Cancer screening" },
      { id: "acne", name: "Acne" },
      { id: "eczema", name: "Eczema" },
      { id: "hand-dermatitis", name: "Hand Dermatitis" },
      { id: "warts", name: "Warts" },
      { id: "excessive-sweating", name: "Excessive Sweating" },
      { id: "hair-loss", name: "Hair Loss" },
      { id: "dark-spots", name: "Dark spots" },
      { id: "allergic-reactions", name: "Allergic reactions on skin" },
      { id: "molluscum", name: "Molluscum " },
      { id: "dandruff", name: "Dandruff" },
      { id: "vitiligo", name: "Vitiligo" },
      { id: "psoriasis", name: "Psoriasis" },
      { id: "rosaceae", name: "Rosaceae" },
    ],
    Surgical: [
      { id: "mohs-surgery", name: "Mohs Surgery" },
      { id: "excision", name: "Excision (removal of cancer or growth)" },
      { id: "cyst-drainage", name: "Cyst drainage" },
    ],
    Cosmetic: [
      { id: "botox", name: "Neurotoxins (Botox)" },
      { id: "chemical-peels", name: "Chemical Peels " },
      { id: "microneedling", name: "Microneedling (acne scars)" },
    ],
  }

  const handleTreatmentClick = (treatmentId: string) => {
    router.push(`/services/${treatmentId}`)
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
              "py-2 px-4 rounded text-center transition-colors text-sm md:text-xl font-semibold text-[#333333]",
              activeCategory === category ? "bg-[#A66A47] text-white" : "bg-[#C7925B99] text-gray-800",
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
            <button
              key={treatment.id}
              onClick={() => handleTreatmentClick(treatment.id)}
              className="border border-[#A66A47] rounded py-[15.5px] w-full sm:w-[300px]  xl:w-[350px] text-center hover:border-[#A66A47] transition-colors text-base font-semibold text-[#333333] mx-auto"
            >
              <span className="text-sm sm:text-base">{treatment.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

// Main component with Suspense boundary
export default function Services() {
  return (
    <Suspense fallback={<div className="container w-full px-4 py-8 text-center">Loading services...</div>}>
      <ServicesContent />
    </Suspense>
  )
}

