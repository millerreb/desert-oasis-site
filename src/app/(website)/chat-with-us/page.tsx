
import Header from '@/components/Headers/Header'
import React from 'react'

const page = () => {
  return (
      <section>
          <Header
              title="Chat With Us"
              subtitle="We're here to help—ask your questions and get personalized support in real-time."
          />
          <div className='container py-[60px] md:py-[270px]'>
            <p className='w-full md:w-[1160px] mx-auto text-[18px] md:text-[22px] text-[#333333] font-normal leading-[150%] text-center '>
              Send us a secure message via our Klara platform by texting your message to 310-881-8824. 
            </p>
      </div>
    </section>
  )
}

export default page
