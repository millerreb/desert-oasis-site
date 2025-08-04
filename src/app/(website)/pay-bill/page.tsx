import Header from "@/components/Headers/Header";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import cardicon1 from "@/../../Public/icon/cardicon/card-icon-1.png";
import cardicon2 from "@/../../Public/icon/cardicon/card-icon-2.png";
import cardicon3 from "@/../../Public/icon/cardicon/card-icon-3.png";
import Consultation from "@/components/Consultation/Consultation";

const page = () => {
  return (
      <section className="">
          <Header
              title="Pay Bill"
              subtitle="Select your preferred payment method below to securely manage your billing."
          />
          {/* ==========card1========== */}
          <div className="container mx-auto mt-10 max-w-[1170px]">
              <div className="border border-[#A66A47] rounded-xl p-5 flex flex-col md:flex-row justify-between items-center gap-5">
                  <div className="flex flex-col md:flex-row gap-5 text-center md:text-left  items-center md:items-start sm:justify-center">
                      <Image
                          src={cardicon1}
                          alt="Credit Card Icon"
                          width={30}
                          height={24}
                          className="w-6 h-6"
                      />
                      <div>
                          <h5 className="text-[#A66A47] text-lg md:text-xl font-semibold">
                              Pay online
                          </h5>
                          <p className="text-[18px] text-[#698B8F] font-normal mt-1">
                              Make a secure online payment with your credit or debit card.
                          </p>
                      </div>
                  </div>

                  <Button asChild className="text-sm md:text-base text-white font-medium px-6 py-2 bg-[#C7925B] hover:bg-[#C7925B]/80">
                     <Link href="https://dodermatology.ema.md/ema/pay/onlinepayments" rel="noreferrer" target="_blank">Pay Online </Link>
                  </Button>
              </div>
          </div>
          {/* ==========card2========== */}
          <div className="container mx-auto mt-5 max-w-[1170px]">
              <div className="border border-[#A66A47] rounded-xl p-5 flex flex-col md:flex-row justify-between items-center gap-5">
                  <div className="flex flex-col md:flex-row gap-5 text-center md:text-left  items-center md:items-start sm:justify-center">
                      <Image
                          src={cardicon2}
                          alt="Credit Card Icon"
                          width={30}
                          height={24}
                          className="w-6 h-6"
                      />
                      <div>
                          <h5 className="text-[#A66A47] text-lg md:text-xl font-semibold">
                              Pay by check
                          </h5>
                          <p className="text-[18px] text-[#698B8F] font-normal mt-1">
                              Pay your bill by mailing a check to: <br />
                              Desert Oasis Dermatology <br />
                              13835 N Tatum Blvd ste 9-268 <br />
                              Phoenix, AZ 85032 <br />
                            Please include your full name and date of birth in the memo line.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
          {/* ==========card3========== */}
          <div className="container mx-auto mt-5 max-w-[1170px] pb-[340px]">
              <div className="border border-[#A66A47] rounded-xl p-5 flex flex-col md:flex-row justify-between items-center gap-5">
                  <div className="flex flex-col md:flex-row gap-5 text-center md:text-left  items-center md:items-start sm:justify-center">
                      <Image
                          src={cardicon3}
                          alt="Credit Card Icon"
                          width={30}
                          height={24}
                          className="w-6 h-6"
                      />
                      <div>
                          <h5 className="text-[#A66A47] text-lg md:text-xl font-semibold">
                              Pay by phone
                          </h5>
                          <p className="text-[18px] text-[#698B8F] font-normal mt-1">
                              Call us at (480)418-3314 to pay your bill over the phone with a credit or debit card.
                          </p>
                      </div>
                  </div>
              </div>
          </div>


           <Consultation/>
      </section>
  );
};

export default page;
