import Banner from '@/components/Banner/Banner'
import Consultation from '@/components/Consultation/Consultation'
import HomeIntro from '@/components/Home-Intro/HomeIntro'
import DoctorProfile from '@/components/Doctors-profile/DoctorsProfile'
import OurServices from '@/components/Our-Services/OurServices'

import Testimonials from '@/components/Testimonials/Testimonials'
import React from 'react'
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("/homepage");

const Homepage = () => {
  return (
    <div>
      <Banner />
      <HomeIntro />
      <OurServices />
      <DoctorProfile />
      <Testimonials/>
      <Consultation />
    </div>
  )
}

export default Homepage
