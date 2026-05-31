
'use client';
import Header from '@/components/Headers/Header'
import React from 'react'
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const page = () => {
    const [shouldPromptReview, setShouldPromptReview] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const params = useSearchParams();
    useEffect(() => {
        const clinical = String(params.get("clinical"));
        const checkin = String(params.get("checkin"));

        if (clinical === "5" && checkin === "5") {
            setShouldPromptReview(true)
        };
        setIsLoading(false)
    }, [params]);

    return (
        <section>
            <Header
                title="Thank You"
                subtitle="Your feedback is important to us."
            />
            <div className='container py-[60px] md:py-[270px]'>
                {isLoading && ( 
                    <p className="w-full md:w-[1100px] mx-auto text-[18px] md:text-[22px] text-[#333333] font-normal text-center">
                        Loading...
                    </p>
                    )}
                {!isLoading && shouldPromptReview && (
                   <p className="w-full md:w-[1040px] mx-auto text-[18px] md:text-[22px] text-[#333333] font-normal text-center">
                        Thank you for completing our survey. Please click on the link below to leave a Google Review and help other people find us.
                        <br />
                        <a className="block mt-6 underline font-normal text-amber-800 hover:text-amber-700" href="https://g.page/r/CTI8xbzuSPu-EBM/review" target="_blank" rel="noreferrer" >Write Us a Google Review</a>
                     </p>
                )}
                {!isLoading && !shouldPromptReview && (
                     <p className="w-full md:w-[1100px] mx-auto text-[18px] md:text-[22px] text-[#333333] font-normal text-center">
                        Thank you for your feedback!
                     </p>
                )}
            </div>
        </section>
    )
}

export default page
