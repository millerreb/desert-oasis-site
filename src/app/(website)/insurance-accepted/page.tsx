import Consultation from "@/components/Consultation/Consultation";
import Header from "@/components/Headers/Header";
import React from "react";
import AASMember from "@/components/AAS/AASMember";

const page = () => {
  return (
    <section>
      <div>
        <Header
          title="Insurance and Self-Pay Pricing Information"
          subtitle="We are committed to making healthcare accessible."
        />
        <div className="container mt-[60px]">
          <AASMember />
          <h2 className="text-center text-[24px] md:text-[32px] font-semibold text-[#A66A47] mb-8">Insurance Plans Accepted</h2>
          <h5 className="text-base text-[#A66A47] font-midium ">
            We accept a variety of insurance plans. Please be advised that most HMO plans 
            require a referral from your primary care provider prior to your visit. 
            Kindly confirm with your insurance carrier or contact our office for assistance 
            with referral requirements.
          </h5>
        </div>
        <div className="container mt-[60px] pb-[60px]">
          <h2 className="text-center text-[24px] md:text-[32px] font-semibold text-[#A66A47] mb-8">List of Accepted Insurance Plans</h2>
          <ul>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] text-justify md:text-start">ACN</p></li>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] text-justify md:text-start">Aetna</p></li>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] text-justify md:text-start">Aither</p></li>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] text-justify md:text-start">Alignment</p></li>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] text-justify md:text-start">All Savers</p></li>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] text-justify md:text-start">Ambetter</p></li>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] text-justify md:text-start">American Indian (AHCCCS)</p></li>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] text-justify md:text-start">AZ Complete Care Health (AHCCCS)</p></li>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] text-justify md:text-start">AZPC</p></li>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] text-justify md:text-start">Banner</p></li>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] text-justify md:text-start">Banner Health Network</p></li>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] text-justify md:text-start">Banner University Health Plans (AHCCCS)</p></li>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] text-justify md:text-start">Banner/Aetna</p></li>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] text-justify md:text-start">BCBS</p></li>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] text-justify md:text-start">BCBS Maricopa Focus</p></li>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] text-justify md:text-start">Cigna</p></li>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] text-justify md:text-start">Cigna Administered by Oscar</p></li>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] text-justify md:text-start">Devoted Health</p></li>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] text-justify md:text-start">Employers Health Network (ACN)</p></li>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] text-justify md:text-start">Equality Health</p></li>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] text-justify md:text-start">Eternal Health</p></li>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] text-justify md:text-start">First Health</p></li>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] text-justify md:text-start">GEHA</p></li>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] text-justify md:text-start">Gold Kidney Health Plan</p></li>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] text-justify md:text-start">Health Choice</p></li>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] text-justify md:text-start">Health Choice (AHCCCS)</p></li>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] text-justify md:text-start">Humana</p></li>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] text-justify md:text-start">ICP (Honor Health Innovation Care Partners)</p></li>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] text-justify md:text-start">Intel</p></li>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] text-justify md:text-start">Medicare</p></li>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] text-justify md:text-start">OptumCare</p></li>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] text-justify md:text-start">Oscar</p></li>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] text-justify md:text-start">Oscar only ICP</p></li>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] text-justify md:text-start">Partners Direct Health</p></li>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] text-justify md:text-start">PNOA</p></li>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] text-justify md:text-start">Railroad</p></li>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] text-justify md:text-start">Sana Benefits</p></li>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] text-justify md:text-start">SCAN</p></li>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] text-justify md:text-start">Surest</p></li>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] text-justify md:text-start">Tricare</p></li>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] text-justify md:text-start">TriWest</p></li>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] text-justify md:text-start">Trustmark</p></li>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] text-justify md:text-start">UMR</p></li>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] text-justify md:text-start">United Healthcare</p></li>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] text-justify md:text-start">United Healthcare (AHCCCS)</p></li>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] text-justify md:text-start">UPMC</p></li>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] text-justify md:text-start">Wellcare by Allwell</p></li>
          </ul>
        </div>
        <div className="container">
          <h5 className="text-base text-[#A66A47] font-semibold mb-[20px]">
          Non-Contracted Insurances:
          </h5>
          <ul>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] text-justify md:text-start">BCBS PimaConnect, PimaFocus or Neighborhood Ntwk</p></li>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] text-justify md:text-start">Cigna Health Spring Medicare Advantage (Contract pending, will accept soon)</p></li>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] text-justify md:text-start">Mercy Care (Contract pending, will accept soon)</p></li>
          </ul>
        </div>
        <div className="container mt-[60px] pb-[60px]">
          <h2 className="text-center text-[24px] md:text-[32px] font-semibold text-[#A66A47] mb-8">Self-Pay Pricing for Uninsured Patients</h2>
          <ul style={{listStyleType: "disc", color: "#A66A47"}}>
            <li><p className="text-base text-[#A66A47] font-normal leading-[150%] mt-[20px] text-justify md:text-start">Office Visit: $150.00</p></li>
          </ul>
          <p className="text-base text-[#A66A47] font-midium mb-[20px] "><i>(Note: This fee does not include any procedures such as biopsies or cryotherapy.)</i></p>
          <h4 className="text-base text-[#A66A47] font-semibold mb-[14px]">Additional Procedure Fees:</h4>
          <ul style={{listStyleType: "disc", color: "#A66A47"}}>
            <li>
              <p className="text-base text-[#A66A47] font-normal leading-[150%] mt-[20px] text-justify md:text-start">Cryotherapy (freezing of lesions):  $100.00 for up to 10 lesions</p>
            </li>
            <li>
              <p className="text-base text-[#A66A47]  font-normal leading-[150%] mt-[20px] text-justify md:text-start">Biopsy or Lesion Removal: $150.00</p>
              <p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start"><i>(Pathology fees are not included. Specimens will be processed by Derm Path Diagnostics and billed separately at Medicare rates.)</i></p>
            </li>
            <li>
              <p className="text-base text-[#A66A47]  font-normal leading-[150%] mt-[20px] text-justify md:text-start">Surgical Excision: $500.00</p>
              <p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start"><i>(Excludes pathology fees. Speciments will be processed by Derm Path Diagnostics and billed separately at Medicare rates.)</i></p>
            </li>
            <li>
              <p className="text-base text-[#A66A47]  font-normal leading-[150%] mt-[20px] text-justify md:text-start">Mohs Micrographic Surgery: $1,000.00</p>
              <p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start"><i>(Includes the first stage and closure. Each additional stage is $300.00.)</i></p>
            </li>
          </ul>
          <p className="text-base text-[#A66A47] mt-[20px] font-normal leading-[150%]">If you have any questions regarding pricing or insurance, please contact our office. We are happy to assist you.</p>
        </div>
        <Consultation />
      </div>
    </section>
  );
};

export default page;
