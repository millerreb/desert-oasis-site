import Consultation from '@/components/Consultation/Consultation'
import Services from '@/components/Services/Services'
import React from 'react'
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("/services");

const page = () => {
  return (
    <div>
      <Services />
      <Consultation/>
    </div>
  )
}

export default page
