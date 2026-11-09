import Consultation from '@/components/Consultation/Consultation'
import PatientInformation from '@/components/Patient-Information/PatientInformation'
import React from 'react'
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("/patient-info");

const page = () => {
  return (
    <div>
          <PatientInformation />
          <Consultation/>
    </div>
  )
}

export default page
