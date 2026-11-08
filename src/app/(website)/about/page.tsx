
import Consultation from '@/components/Consultation/Consultation'
import DoctorProfileAbout from '@/components/Doctors-profile/DoctorProfileForAbout'
import React from 'react'
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("/about");

const page = () => {
  return (
    <div>
      <DoctorProfileAbout />
      <Consultation/>
     
    </div>
  )
}

export default page
