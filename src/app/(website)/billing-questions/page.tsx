import React from 'react';
import Consultation from '@/components/Consultation/Consultation'
import Header from '@/components/Headers/Header'
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("/billing-questions");

//THIS IS NO LONGER IN USE. CAN DELETE IF NOT NEEDED IN FUTURE.
const page = () => {
  return (
    <section>
      <Header
        title="Billing Questions"
        subtitle="Clear, Simple, and Supportive Billing Assistance"
      />
      <div className='container mt-[60px] py-[60px] md:py-[270px]'>
          <p className='w-full md:w-[1160px] mx-auto text-[18px] md:text-[22px] text-[#333333] font-normal leading-[150%] text-center '>
          Call us at <a href="tel:+14804183314" className="text-[#8A5536] underline">(480) 418-3314</a>, press extension 2 and then press 4 to speak to our billing team.
          <br /> 
          <br />
          If you have any difficulties reaching our billing extension, please call our main number, <a href="tel:+14804183314" className="text-[#8A5536] underline">(480) 418-3314</a>, and press extension 2 and then 3 to speak with someone in our clinical department.
          </p>
      </div>
      <Consultation/>
    </section>
  )
}

export default page
