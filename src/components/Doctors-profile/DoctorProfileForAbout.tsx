import Image from "next/image"
import doctor from "@/../../Public/image/doctor2.png"
import logo1 from "@/../../Public/image/about-logo-1.png"
import logo2 from "@/../../Public/image/about-logo-2.png"
import logo3 from "@/../../Public/image/about-logo-3.png"
import logo4 from "@/../../Public/image/about-logo-4.png"
import logo5 from "@/../../Public/image/about-logo-5.png"
import logo6 from "@/../../Public/image/about-logo-6.png"



export default function DoctorProfileForAbout() {
    return (
        <div className="container mx-auto px-4 py-8 mt-[60px]">
            {/* Top section - Mobile: stacked, Desktop: side by side */}
            <div className="flex flex-col md:flex-row md:items-start gap-[70px] mb-12">
                {/* Profile image */}
                <div className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0">
                    <div className="rounded-lg overflow-hidden">
                        <Image
                            src={doctor}
                            alt="Dr. Lavian"
                            width={340}
                            height={100}
                            className="w-full h-[300px] object-cover"
                        />
                    </div>
                </div>

                {/* Bio section */}
                <div className="w-full md:w-2/3 lg:w-3/4">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#A06A44] mb-10 pt-[50px]">Meet Dr. Lavian </h1>

                    <p className="text-[#333333]  text-base md:text-lg font-medium leading-[150%] mb-6 text-justify">
                        Dr. Lavian is a highly accomplished physician with a passion for patient care and medical research. He earned his undergraduate degree from UC Berkeley, graduating Summa Cum Laude with highest honors in Integrative Biology. He then pursued his medical degree at the Zucker School of Medicine at Hofstra/Northwell in New York, where he was inducted into the prestigious Alpha Omega Alpha Honor Society.
                    </p>
                </div>
            </div>

            {/* Bottom section - Mobile: stacked, Desktop: side by side */}
            <div className="">
                {/* Additional bio */}
                <div className=" order-2 md:order-1">
                    <p className="text-[#333333] text-base md:text-lg leading-[150%] text-justify font-medium">
                        Dr. Lavian completed his internal medicine training at Lenox Hill Hospital in Manhattan, followed by a clinical research fellowship in cutaneous oncology at Columbia University. He then returned to the Zucker School of Medicine at Hofstra/Northwell to complete his residency, serving as chief resident and earning induction into the Gold Humanism Honor Society.
                    </p>

                    <p className="text-[#333333] text-base md:text-lg leading-[150%] mt-6 text-justify font-medium ">
                        A dedicated researcher, Dr. Lavian has been published in numerous esteemed peer-reviewed journals and has presented at various medical conferences. Outside of medicine, he enjoys spending time with his family and staying active through yoga, Pilates, and basketball.
                    </p>
                </div>

                {/* Credentials/logos */}
                <div className="flex flex-wrap gap-y-5 justify-between items-center mt-[30px] pb-[100px]">
                    <div className="w-[30%] md:w-[16%]">
                        <Image
                            src={logo1}
                            alt="Columbia University Logo"
                            width={154}
                            height={154}
                            className="h-auto w-[120px] "
                        />
                    </div>
                    <div className="w-[30%] md:w-[16%]">
                        <Image
                            src={logo2}
                            alt="Columbia University Logo"
                            width={154}
                            height={154}
                            className="h-[90px] w-[90px] md:w-28 object-contain"
                        />
                    </div>
                    <div className="w-[30%] md:w-[16%]">
                        <Image
                            src={logo3}
                            alt="Columbia University Logo"
                            width={154}
                            height={154}
                            className="h-auto w-[90px] md:w-28"
                        />
                    </div>
                    <div className="w-[30%] md:w-[16%]">
                        <Image
                            src={logo4}
                            alt="Columbia University Logo"
                            width={154}
                            height={100}
                            className="h-[90px] w-[90px]  "
                        />
                    </div>
                    <div className="w-[30%] md:w-[16%]">
                        <Image
                            src={logo5}
                            alt="Columbia University Logo"
                            width={100}
                            height={100}
                            className="h-[90px] w-[100px]  object-contain "
                        />
                    </div>
                    <div className="w-[30%] md:w-[16%]">
                        <Image
                            src={logo6}
                            alt="Columbia University Logo"
                            width={154}
                            height={154}
                            className="h-auto w-[90px] md:w-28"
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

