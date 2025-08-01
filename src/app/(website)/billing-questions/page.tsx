import Consultation from '@/components/Consultation/Consultation'
import Header from '@/components/Headers/Header'
import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
  return (
    <section>
      <Header
        title="Billing Questions"
              subtitle="Clear, Simple, and Supportive Billing Assistance"
          />
          <div className='container mt-[60px] py-[60px] md:py-[270px]'>
              <p className='w-full md:w-[1160px] mx-auto text-[18px] md:text-[22px] text-[#333333] font-normal leading-[150%] text-center '>
              Call our billing department directly:  <span className='text-[#A66A47]'>(646) 630-8588</span>
              <br /> 
              <br />
              If you have any difficulties reaching our billing department, please call our main number, (480) 418-3314,  and ask to speak to our clinical department who can help connect you. 
              </p>
              <div className='flex justify-center mt-[60px]'>
                  <Button className='text-sm md:text-base text-white font-medium px-6 py-2 bg-[#C7925B] hover:bg-[#C7925B]/80'>Ask Questions by Calling (480) 418-3314</Button>
              </div>
      </div>
      <Consultation/>
    </section>
  )
}

export default page
