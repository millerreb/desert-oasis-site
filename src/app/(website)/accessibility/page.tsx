import Header from "@/components/Headers/Header";
import React from "react";

const page = () => {
  return (
    <section>
      <Header
        title="Accessibility & Inclusion Statement 
                for Patients and Visitors"
        subtitle="Prioritizing Accessibility and Inclusion in Every Interaction"
          />
          <div className="container mt-[60px] py-[60px] md:py-[322px]">
              <p className=" text-[18px] md:text-[22px] text-[#333333] font-normal leading-[150%] text-center">We are committed to ensuring that our dermatology website and mobile applications are accessible to everyone, including individuals with disabilities. If you require assistance using our site or app, please call our support team at <span className="text-[#A66A47]">(480) 418-3314.</span></p>
          </div>
    </section>
  );
};

export default page;
