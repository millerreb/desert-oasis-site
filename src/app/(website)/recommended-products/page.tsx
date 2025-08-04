// import Consultation from '@/components/Consultation/Consultation'
// import Header from '@/components/Headers/Header'
// import { Button } from '@/components/ui/button'
import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const page = () => {
  return (
    <div>
          <div className='container py-[60px] md:py-[340px]'>
              <h3 className='text-[28px] md:text-[40px] text-[#A66A47] font-bold text-center'>Feature coming soon</h3>
              <div className='flex  justify-center mt-10'>
                  <Link href='/' className='border border-[#A66A47] p-2 px-7  rounded-sm flex items-center gap-2'>
                      <ArrowLeft />
                      <span className='text-sm font-semibold '>Go Back</span>
                  </Link>
              </div>
          </div>
    </div>
    // <div>
    //       <div>
    //           <Header title='Recommended Products' subtitle='Discover our curated selection of skincare essentials and wellness products. Shop with confidence from our trusted partners.' />
    //           <div className='container mt-[60px] pb-[60px]'>
    //               <div className='flex flex-wrap justify-between items-center py-[100px] md:py-[250px] gap-y-5'>
    //                   <p className='text-[24px] text-[#A66A47] font-midium'>Explore All the Recommended Products form trusted Store</p>
    //                   <Button className='text-base text-[#FFFFFF] font-medium bg-[#C7925B] hover:bg-[#C7925B]/80 h-[43px]'>Explore Products </Button>
    //               </div>
    //           </div>
    //           <Consultation/>
    //    </div>
    // </div>
  )
}

export default page
