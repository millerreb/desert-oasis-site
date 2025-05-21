import Header from '@/components/Headers/Header'
import React from 'react'

import Consultation from '@/components/Consultation/Consultation'
import BusinessHours from './OfficeHours'

const page = () => {
  return (
    <section>
          <div >
              <Header title='Hours & Location' subtitle='Plan your visit easily. Find our office hours, location, and directions below.' />
        <div className='container mt-[60px] pb-[60px] lg:pb-[238px] '>
          <h3 className='text-[28px] md:text-[32px]  text-[#A66A47] font-semibold text-center'>OFFICE HOURS</h3>
          <BusinessHours/>
              </div>
               <Consultation/>
      </div>
    </section>
  )
}

export default page
