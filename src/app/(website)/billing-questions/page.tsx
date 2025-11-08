import React from 'react';
import Consultation from '@/components/Consultation/Consultation'
import Header from '@/components/Headers/Header'

const page = () => {
  return (
    <section>
      <Header
        title="Billing Questions"
        subtitle="Clear, Simple, and Supportive Billing Assistance"
      />
      <div className='container mt-[60px] py-[60px] md:py-[270px]'>
          <p className='w-full md:w-[1160px] mx-auto text-[18px] md:text-[22px] text-[#333333] font-normal leading-[150%] text-center '>
          Call us at <span className='text-[#A66A47]'>(480) 418-3314 </span>, press extension 2 and then press 4 to speak to our billing team.
          <br /> 
          <br />
          If you have any difficulties reaching our billing extension, please call our main number, (480) 418-3314, and press extension 2 and then 3 to speak with someone in our clinical department.
          </p>
      </div>
      <Consultation/>
    </section>
  )
}

export default page
