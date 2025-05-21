import Consultation from '@/components/Consultation/Consultation'
import PatientInformation from '@/components/Patient-Information/PatientInformation'
import React from 'react'

const page = () => {
  return (
    <div>
          <PatientInformation />
          <Consultation/>
    </div>
  )
}

export default page
