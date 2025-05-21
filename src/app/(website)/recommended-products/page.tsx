import Consultation from '@/components/Consultation/Consultation'
import Header from '@/components/Headers/Header'
import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
  return (
    <div>
          <div>
              <Header title='Recommended Products' subtitle='Discover our curated selection of skincare essentials and wellness products. Shop with confidence from our trusted partners.' />
              <div className='container mt-[60px] pb-[60px]'>
                  <div className='flex flex-wrap justify-between items-center py-[100px] md:py-[250px] gap-y-5'>
                      <p className='text-[24px] text-[#A66A47] font-midium'>Explore All the Recommended Products form trusted Store</p>
                      <Button className='text-base text-[#FFFFFF] font-medium bg-[#C7925B] hover:bg-[#C7925B]/80 h-[43px]'>Explore Products </Button>
                  </div>
              </div>
              <Consultation/>
       </div>
    </div>
  )
}

export default page
