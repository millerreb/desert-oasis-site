import Consultation from '@/components/Consultation/Consultation'
import Services, { type TreatmentCategory } from '@/components/Services/Services'
import React from 'react'
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("/services");

const categories: TreatmentCategory[] = ["Medical", "Surgical", "Cosmetic"]

const page = ({ searchParams }: { searchParams: { category?: string } }) => {
  // Read the requested tab here so the page arrives with the right list already in it
  const requested = searchParams.category as TreatmentCategory
  const initialCategory = categories.includes(requested) ? requested : "Medical"

  return (
    <div>
      <Services initialCategory={initialCategory} />
      <Consultation/>
    </div>
  )
}

export default page
