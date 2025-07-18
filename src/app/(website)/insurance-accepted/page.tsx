import Consultation from "@/components/Consultation/Consultation";
import Header from "@/components/Headers/Header";
import React from "react";

const page = () => {
  return (
    <section>
      <div>
        <Header
          title="Insurance and Self-Pay Pricing Information"
          subtitle="We are committed to making healthcare accessible."
        />
        <div className="container mt-[60px]">
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
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">Aetna Commercial - Select/HMO/Managed Choice POS/Open Choice PPO/QPOS/Open Access/EOP/POS/PPO</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">Aetna Banner - HMO/Open ACCESS/POS/PPO</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">Aetna Medicare - Eagle PPO/Platinum HMO-POS/Premier HMO-POS/Elite PPO/Freedom PPO</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">ACPN PPO 1</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">Ameriplan Discount Card</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">Antidote PPO</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">CorVel Auto/PPO/Workers Comp</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">Fusion PPO</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">Galaxy Health PPO/Savings Card/Workers Comp</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">Gold Kidney</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">HealthSmart ACCEL/Auto/HPO/PPO/Workers Comp</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">IHP Auto/Discount Card/PPO/Workers Comp</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">Imperial Alignment PPO</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">Imperial Amerigroup</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">Imperial HealthCosmos Medical Group</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">Imperial Marketplace Plan</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">Imperial Medicare</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">Molina/Magellan AHCCCS</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">Multiplan Auto/Medicare Advantage/PPO/ValuePoint/Workers Comp</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">Prime Health/Personal Injury Network/PPO/AUTO/Workers Comp/Telemedicine Program/WTC</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">Prospect Scan Desert Health</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">Provider Network of America Primary PPO/Supplemental/Workers Comp</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">Provider Select Inc</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">Three Rivers Provider Network PPO</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">UPMC</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">USA AUTO Medical/Managed Care PPO/Workers Comp</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">Velocity National Provider Network Auto/PPO/Workers Comp</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">Zelis Healthcare Auto/Medicaid-AHCCCS/Medicare/Primary Plan PPO/Supplemental/Workers Comp</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">Banner Health Network</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">Banner University Health Plan</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">Blue Cross Blue Shield of Arizona</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">Cigna Commercial (HMO, OPEN ACCESS, PPO)</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">Community Care Network (CCN) - VA/TRIWEST</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">Emblem Health (Previously GHI) - through First Health Network</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">Innovation Care Partners (Needs HH CVO credentialing approval)</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">Medicare</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">Oscar + CIGNA</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">Tricare West</p></li>
          </ul>
        </div>
        <div className="container">
          <h5 className="text-base text-[#A66A47] font-midium mb-[20px]">
          We soon hope to accept these plans:
          </h5>
          <ul>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">AHCCCS</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">Allwell</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">Ambetter</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">Arizona Care Network</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">Arizona Complete Care</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">Health Choice AHCCCS/Medicare</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">Blue Cross Blue Shield Advantage Medicare</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">Caremore</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">Cigna Medicare Advantage</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">CMDP - through Mercy Care</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">Devoted</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">Arizona Priority Care Network - Eternal Health</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">Arizona Priority Care Network – SCAN</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">Arizona Priority Care Network – Alignment</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">Arizona Priority Care Network – BCBSAZ</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">First Health Network - need credentialing approved with AETNA first</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">Health Net AZ - now AZ Complete Health</p></li>
            <li><p className="text-base text-[#A66A47]  font-normal leading-[150%] text-justify md:text-start">Humana</p></li>
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
