import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

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
  )
}

export default page
