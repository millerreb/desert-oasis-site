import Banner from '@/components/Banner/Banner'
import Consultation from '@/components/Consultation/Consultation'
import DoctorProfile from '@/components/Doctors-profile/DoctorsProfile'
import OurServices from '@/components/Our-Services/OurServices'

import Testimonials from '@/components/Testimonials/Testimonials'
import React from 'react'

const Homepage = () => {
  return (
    <div>
      <Banner />
      <OurServices />
      <DoctorProfile />
      <Testimonials/>
      <Consultation />
    </div>
  )
}

export default Homepage
