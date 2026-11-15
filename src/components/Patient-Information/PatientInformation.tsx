import React from "react";
import { Button } from "../ui/button";
// import { ArrowRight } from "lucide-react";
import Image from "next/image";
import icon1 from "@/../../public/icon/icon1.png";
import icon2 from "@/../../public/icon/icon2.png";
import icon4 from "@/../../public/icon/icon4.png";
import icon5 from "@/../../public/icon/icon5.png";
import icon6 from "@/../../public/icon/icon6.png";
import icon7 from "@/../../public/icon/icon7.png";
import icon8 from "@/../../public/icon/icon8.png";
import icon9 from "@/../../public/icon/icon9.png";
import Link from "next/link";
import Header from "../Headers/Header";

const OurServices = () => {
  return (
    <section>
      <Header
        title="Patient Information"
        subtitle="Welcome to your one-stop hub for managing your dermatology care."
      />
      <div className=" container mt-[60px]">
        <div className="flex justify-center flex-wrap gap-y-[50px] md:gap-x-[4%] lg:gap-x-[5%] mt-[60px]">
          {/* =================================card1=============================== */}
          <div className=" w-full md:w-[48%] lg:w-[30%] border border-[#A66A47] rounded-[10px] p-5 group hover:bg-[#C7925B] transition-all duration-300">
            <div className="flex justify-center">
              <Image src={icon1} alt="placeholder" width={60} height={60} />
            </div>
            <h3 className="text-[24px] text-[#A66A47] font-semibold text-center mt-[30px] group-hover:text-white">
              Online Scheduling
            </h3>
            <p className="h-[96px] text-xl text-[#698B8F] font-normal text-center mt-5 group-hover:text-white">
              Book your appointment quickly and easily through our online
              scheduler, available 24/7.
            </p>
            <div className="flex justify-center mt-[54px]">
              <a target="_blank" href="https://l.klara.com/JKkUeq7HEnFzXBDj">
                <Button
                  className="bg-[#C7925B] text-base font-midium text-white px-[25px] py-[10px] mt-5 transition-all duration-300 
            group-hover:bg-white group-hover:text-[#C7925B]/80"
                >
                  Schedule Now
                </Button>
              </a>
            </div>
          </div>
          {/* =================================card2=============================== */}
          <div className=" w-full md:w-[48%] lg:w-[30%] border border-[#A66A47] rounded-[10px] p-5 group hover:bg-[#C7925B] transition-all duration-300">
            <div className="flex justify-center">
              <Image src={icon2} alt="placeholder" width={60} height={60} />
            </div>
            <h3 className="text-[24px] text-[#A66A47] font-semibold text-center mt-[30px] group-hover:text-white">
              Pay Your Bill
            </h3>
            <p className="h-[96px] text-xl text-[#698B8F] font-normal text-center mt-5 group-hover:text-white">
              Securely manage your payments online with our streamlined billing
              system.
            </p>
            <div className="flex justify-center mt-[54px]">
              <Link href="/pay-bill">
                <Button
                  className="bg-[#C7925B] text-base font-midium text-white px-[25px] py-[10px] mt-5 transition-all duration-300 
                     group-hover:bg-white group-hover:text-[#C7925B]/80"
                >
                  Pay Bill
                </Button>
              </Link>
            </div>
          </div>
          {/* =================================card4=============================== */}
          <div className=" w-full md:w-[48%] lg:w-[30%] border border-[#A66A47] rounded-[10px] p-5 group hover:bg-[#C7925B] transition-all duration-300">
            <div className="flex justify-center">
              <Image src={icon4} alt="placeholder" width={60} height={60} />
            </div>
            <h3 className="text-[24px] text-[#A66A47] font-semibold text-center mt-[30px] group-hover:text-white">
              Dermatology Patient Forms
            </h3>
            <p className="h-[96px] text-xl text-[#698B8F] font-normal text-center mt-5 group-hover:text-white">
              Download and complete all necessary forms ahead of your visit for
              a smooth check-in process.
            </p>
            <div className="flex justify-center mt-[54px]">
              <Link href="/dermatology-patient-forms">
                <Button
                  className="bg-[#C7925B] text-base font-midium text-white px-[25px] py-[10px] mt-5 transition-all duration-300 
            group-hover:bg-white group-hover:text-[#C7925B]/80"
                >
                  View Forms
                </Button>
              </Link>
            </div>
          </div>
          {/* =================================card5=============================== */}
          <div className=" w-full md:w-[48%] lg:w-[30%] border border-[#A66A47] rounded-[10px] p-5 group hover:bg-[#C7925B] transition-all duration-300">
            <div className="flex justify-center">
              <Image src={icon5} alt="placeholder" width={60} height={60} />
            </div>
            <h3 className="text-[24px] text-[#A66A47] font-semibold text-center mt-[30px] group-hover:text-white">
              Insurance Accepted
            </h3>
            <p className="h-[96px] text-xl text-[#698B8F] font-normal text-center mt-5 group-hover:text-white">
              Review our comprehensive list of accepted insurances to ensure
              your coverage is in place.
            </p>
            <div className="flex justify-center mt-[54px]">
              <Link href="/insurance-accepted">
                <Button
                  className="bg-[#C7925B] text-base font-midium text-white px-[25px] py-[10px] mt-5 transition-all duration-300 
            group-hover:bg-white group-hover:text-[#C7925B]/80"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          {/* =================================card6=============================== */}
          <div className=" w-full md:w-[48%] lg:w-[30%] border border-[#A66A47] rounded-[10px] p-5 group hover:bg-[#C7925B] transition-all duration-300">
            <div className="flex justify-center">
              <Image src={icon6} alt="placeholder" width={60} height={60} />
            </div>
            <h3 className="text-[24px] text-[#A66A47] font-semibold text-center mt-[30px] group-hover:text-white">
              Hours & Location
            </h3>
            <p className="h-[96px] text-xl text-[#698B8F] font-normal text-center mt-5 group-hover:text-white">
              Find our office hours and get easy directions to our convenient
              location using our interactive map.
            </p>
            <div className="flex justify-center mt-[54px]">
              <Link href="/hours-and-location">
                <Button
                  className="bg-[#C7925B] text-base font-midium text-white px-[25px] py-[10px] mt-5 transition-all duration-300 
            group-hover:bg-white group-hover:text-[#C7925B]/80"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          {/* =================================card7=============================== */}
          <div className=" w-full md:w-[48%] lg:w-[30%] border border-[#A66A47] rounded-[10px] p-5 group hover:bg-[#C7925B] transition-all duration-300">
            <div className="flex justify-center">
              <Image src={icon7} alt="placeholder" width={60} height={60} />
            </div>
            <h3 className="text-[24px] text-[#A66A47] font-semibold text-center mt-[30px] group-hover:text-white">
              Patient Portal
            </h3>
            <p className="h-[96px] text-xl text-[#698B8F] font-normal text-center mt-5 group-hover:text-white">
              Access your health records, appointment history, and messages from
              your care team in one secure place.
            </p>
            <div className="flex justify-center mt-[54px]">
              <Button
                asChild
                className="bg-[#C7925B] text-base font-midium text-white px-[25px] py-[10px] mt-5 transition-all duration-300 
            group-hover:bg-white group-hover:text-[#C7925B]/80"
              >
                <Link href="https://dodermatology.ema.md" rel="noreferrer" target="_blank">
                  Log In
                </Link>
              </Button>
            </div>
          </div>
          {/* =================================card8=============================== */}
          <div className=" w-full md:w-[48%] lg:w-[30%] border border-[#A66A47] rounded-[10px] p-5 group hover:bg-[#C7925B] transition-all duration-300">
            <div className="flex justify-center">
              <Image src={icon8} alt="placeholder" width={60} height={60} />
            </div>
            <h3 className="text-[24px] text-[#A66A47] font-semibold text-center mt-[30px] group-hover:text-white">
              Chat With Us
            </h3>
            <p className="h-[96px] text-xl text-[#698B8F] font-normal text-center mt-5 group-hover:text-white">
              Review our comprehensive list of accepted insurances to ensure
              your coverage is in place.
            </p>
            <div className="flex justify-center mt-[54px]">
              <Link href="/chat-with-us">
                <Button
                  className="bg-[#C7925B] text-base font-midium text-white px-[25px] py-[10px] mt-5 transition-all duration-300 
            group-hover:bg-white group-hover:text-[#C7925B]/80"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          {/* =================================card9=============================== */}
          <div className=" w-full md:w-[48%] lg:w-[30%] border border-[#A66A47] rounded-[10px] p-5 group hover:bg-[#C7925B] transition-all duration-300">
            <div className="flex justify-center">
              <Image src={icon9} alt="placeholder" width={60} height={60} />
            </div>
            <h3 className="text-[24px] text-[#A66A47] font-semibold text-center mt-[30px] group-hover:text-white">
              Recommended Products
            </h3>
            <p className="h-[96px] text-xl text-[#698B8F] font-normal text-center mt-5 group-hover:text-white">
              Find our office hours and get easy directions to our convenient
              location using our interactive map.
            </p>
            <div className="flex justify-center mt-[54px]">
              <Link href="/recommended-products">
                <Button
                  className="bg-[#C7925B] text-base font-midium text-white px-[25px] py-[10px] mt-5 transition-all duration-300 
            group-hover:bg-white group-hover:text-[#C7925B]/80"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-[50px] pb-[60px]">
      
        </div>
      </div>
    </section>
  );
};

export default OurServices;
