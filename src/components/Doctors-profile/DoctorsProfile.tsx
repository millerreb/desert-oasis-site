import Image from "next/image";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import doctorsimge from "@/../../Public/image/doctors.png";
import Link from "next/link";

export default function DoctorProfile() {
  return (
    <section className="bg-[#C7925B] text-white py-12 px-4 md:px-8 lg:px-12">
      <div className="container ">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Doctor Image */}
          <div className="w-full md:w-full lg:w-1/4 flex-shrink-0">
            <div className="rounded-lg overflow-hidden ">
              <Image
                src={doctorsimge}
                alt="Dr. Lavian"
                width={400}
                height={620}
                className="w-full h-[618px] object-contain lg:object-cover"
              />
            </div>
          </div>

          {/* Doctor Information */}
          <div className="w-full md:w-full lg:w-3/4 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Meet Dr. Lavian </h1>

            <p className="text-base md:text-lg text-justify">
              Dr. Lavian is a double board-certified specialist in Dermatology
              and Mohs Micrographic Surgery, offering expertise across medical,
              surgical, and cosmetic dermatology. With extensive training and a
              commitment to excellence, he provides patient-centered,
              evidence-based care tailored to each individual.
            </p>

            <p className="text-base md:text-lg text-justify">
              Dr. Lavian earned his medical degree from Hofstra-Northwell School
              of Medicine, graduating in the top 15% of his class. During his
              residency at Hofstra-Northwell, he served as chief resident and
              was inducted into the Gold Humanism Honor Society for his
              dedication to compassionate patient care. As a Fellow of the
              American Academy of Dermatology, he remains at the forefront of
              dermatologic advancements.
            </p>

            <p className="text-base md:text-lg text-justify">
              A respected researcher, Dr. Lavian has authored numerous
              publications in peer- reviewed medical journals and has presented
              his work at national conferences. His expertise, combined with a
              personalized approach, ensures the highest quality of dermatologic
              care for every patient.
            </p>

            <div className="pt-2">
              <h2 className="text-2xl md:text-3xl font-semibold">
                Specialties: Medical, Surgical, Cosmetic Dermatology
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-y-4  justify-between pt-4">
              <Link href="/about">
                <Button
                  variant="outline"
                  className="bg-white h-[43px] px-[24px] text-[#C7925B] hover:bg-gray-100 border-white hover:text-[#c69c6d] font-medium"
                >
                  Learn More About Dr. Lavian
                </Button>
              </Link>
              <div className="flex items-center gap-x-3">
                <Phone className="h-4 w-4" />
                <span className="text-sm md:text-base text-[#FFFFFF] font-semibold">
                  Questions? Give us a call: (480) 418-3314
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
