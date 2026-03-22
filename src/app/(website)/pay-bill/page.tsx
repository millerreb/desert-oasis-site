import Header from "@/components/Headers/Header";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import cardicon1 from "@/../../Public/icon/cardicon/card-icon-1.png";
import cardicon2 from "@/../../Public/icon/cardicon/card-icon-2.png";
import cardicon3 from "@/../../Public/icon/cardicon/card-icon-3.png";
import icon3 from "@/../../public/icon/icon3.png";
import Consultation from "@/components/Consultation/Consultation";
import AASMember from "@/components/AAS/AASMember";

interface IProps {
  isAAs: boolean
}
const Page = () => {
  // Shared markup for both columns
  const PaymentOptions = ({isAAs}: IProps) => {
    if (isAAs) {
      return (
        <div className="flex flex-col gap-5 w-full">
        {/* ==========card1========== */}
        <div className="border border-[#A66A47] rounded-xl p-5 flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="flex flex-col md:flex-row gap-5 text-center md:text-left items-center md:items-start sm:justify-center">
            <Image src={cardicon1} alt="Credit Card Icon" width={30} height={24} className="w-6 h-6" />
            <div>
              <h5 className="text-[#A66A47] text-lg md:text-xl font-semibold">Pay online</h5>
              <p className="text-[18px] text-[#698B8F] font-normal mt-1">
                Our new billing company is Arizona Advanced Surgery in conjunction with Healow pay.
              </p>
            </div>
          </div>
          <Button asChild className="text-sm md:text-base text-white font-medium px-6 py-2 bg-[#C7925B] hover:bg-[#C7925B]/80">
            <Link href="https://www.healowpay.com/HealowPay/jsp/healow/login.jsp" rel="noreferrer" target="_blank">Pay Online</Link>
          </Button>
        </div>

        {/* ==========card2========== */}
        <div className="border border-[#A66A47] rounded-xl p-5 flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="flex flex-col md:flex-row gap-5 text-center md:text-left items-center md:items-start sm:justify-center">
            <Image src={cardicon2} alt="Credit Card Icon" width={30} height={24} className="w-6 h-6" />
            <div>
              <h5 className="text-[#A66A47] text-lg md:text-xl font-semibold">Pay by check</h5>
              <p className="text-[18px] text-[#698B8F] font-normal mt-1">
                Pay your bill by mailing a check to: <br />
                Arizona Advanced Surgery <br />
                PO Box 9244 <br />
                Las Vegas, NV 89193-2434 <br />
                <br />
                Please include your full name and date of birth in the memo line.
              </p>
            </div>
          </div>
        </div>

        {/* ==========card3========== */}
        <div className="border border-[#A66A47] rounded-xl p-5 flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="flex flex-col md:flex-row gap-5 text-center md:text-left items-center md:items-start sm:justify-center">
            <Image src={cardicon3} alt="Credit Card Icon" width={30} height={24} className="w-6 h-6" />
            <div>
              <h5 className="text-[#A66A47] text-lg md:text-xl font-semibold">Pay by phone</h5>
              <p className="text-[18px] text-[#698B8F] font-normal mt-1">
                Call us at (602) 649-2007 to pay your bill over the phone with a credit or debit card.
              </p>
            </div>
          </div>
        </div>

        {/* ==========card4========== */}
        <div className="border border-[#A66A47] rounded-xl p-5 flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="flex flex-col md:flex-row gap-5 text-center md:text-left items-center md:items-start sm:justify-center">
            <Image src={icon3} alt="Billing Questions Icon" width={30} height={24} className="w-6 h-6" />
            <div>
              <h5 className="text-[#A66A47] text-lg md:text-xl font-semibold">Questions?</h5>
              <p className="text-[18px] text-[#698B8F] font-normal mt-1">
                Please email us at <Link className="underline decoration-[#4A6265] underline-offset-4 hover:decoration-2" href="mailto:billing@AZAdvanced.com">billing@AZAdvanced.com</Link> with any payment or billing related questions.
                Include your full name, date of birth, and phone number in the message.
                <br />
                <br />
                You can also call us at (602) 649-2007 with billing questions.
              </p>
            </div>
          </div>
        </div>
      </div>
    )} else {
      return (
        <div className="flex flex-col gap-5 w-full">
        {/* ==========card1========== */}
          <div className="border border-[#A66A47] rounded-xl p-5 flex flex-col md:flex-row justify-between items-center gap-5">
            <div className="flex flex-col md:flex-row gap-5 text-center md:text-left items-center md:items-start sm:justify-center">
              <Image src={cardicon1} alt="Credit Card Icon" width={30} height={24} className="w-6 h-6" />
              <div>
                <h5 className="text-[#A66A47] text-lg md:text-xl font-semibold">Pay online</h5>
                <p className="text-[18px] text-[#698B8F] font-normal mt-1">
                  Make a secure online payment with your credit or debit card by clicking the Pay Online button.
                </p>
              </div>
            </div>
            <Button asChild className="text-sm md:text-base text-white font-medium px-6 py-2 bg-[#C7925B] hover:bg-[#C7925B]/80">
              <Link href="https://dodermatology.ema.md/ema/pay/onlinepayments" rel="noreferrer" target="_blank">Pay Online</Link>
            </Button>
          </div>

          {/* ==========card2========== */}
          <div className="border border-[#A66A47] rounded-xl p-5 flex flex-col md:flex-row justify-between items-center gap-5">
            <div className="flex flex-col md:flex-row gap-5 text-center md:text-left items-center md:items-start sm:justify-center">
              <Image src={cardicon2} alt="Credit Card Icon" width={30} height={24} className="w-6 h-6" />
              <div>
                <h5 className="text-[#A66A47] text-lg md:text-xl font-semibold">Pay by check</h5>
                <p className="text-[18px] text-[#698B8F] font-normal mt-1">
                  Pay your bill by mailing a check to: <br />
                  Desert Oasis Dermatology <br />
                  13835 N Tatum Blvd ste 9-268 <br />
                  Phoenix, AZ 85032 <br />
                  <br />
                  Please include your full name and date of birth in the memo line.
                </p>
              </div>
            </div>
          </div>

          {/* ==========card3========== */}
          <div className="border border-[#A66A47] rounded-xl p-5 flex flex-col md:flex-row justify-between items-center gap-5">
            <div className="flex flex-col md:flex-row gap-5 text-center md:text-left items-center md:items-start sm:justify-center">
              <Image src={cardicon3} alt="Credit Card Icon" width={30} height={24} className="w-6 h-6" />
              <div>
                <h5 className="text-[#A66A47] text-lg md:text-xl font-semibold">Pay by phone</h5>
                <p className="text-[18px] text-[#698B8F] font-normal mt-1">
                  Call us at (480) 454-7100 to pay your bill over the phone with a credit or debit card.
                </p>
              </div>
            </div>
          </div>

          {/* ==========card4========== */}
          <div className="border border-[#A66A47] rounded-xl p-5 flex flex-col md:flex-row justify-between items-center gap-5">
            <div className="flex flex-col md:flex-row gap-5 text-center md:text-left items-center md:items-start sm:justify-center">
              <Image src={icon3} alt="Billing Questions Icon" width={30} height={24} className="w-6 h-6" />
              <div>
                <h5 className="text-[#A66A47] text-lg md:text-xl font-semibold">Questions?</h5>
                <p className="text-[18px] text-[#698B8F] font-normal mt-1">
                  Please call us at (480) 454-7100 with billing questions.
                </p>
              </div>
            </div>
          </div>  
       </div>
      )
    }
  };

  return (
    <section className="">
      <Header
        title="Payment and Billing Information"
        subtitle="Select your preferred payment method below to securely manage your billing."
      />
      <div className="mt-[60px]">
        <AASMember />
      </div>
      {/* Two Column Wrapper */}
      <div className="container mx-auto mt-10 max-w-[1170px] pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-6" >
            <h3 className="text-xl md:text-2xl font-bold text-[#A66A47] pb-2">
              For appointments before March 23, 2026
            </h3>
            <PaymentOptions isAAs={false} />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl md:text-2xl font-bold text-[#A66A47] pb-2">
              For appointments after March 23, 2026
            </h3>
            <PaymentOptions isAAs />
          </div>

        </div>
      </div>

      <Consultation />
    </section>
  );
};

export default Page;