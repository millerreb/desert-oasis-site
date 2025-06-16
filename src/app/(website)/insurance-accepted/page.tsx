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
        <div className="container mt-[60px]">
          <h2 className="text-center text-[24px] md:text-[32px] font-semibold text-[#A66A47] mb-8">Self-Pay Pricing for Uninsured Patients</h2>
          <h4 className="text-base text-[#A66A47] font-midium ">
            •	Office Visit: $150.00 <br />
          </h4>
          <h5 className="text-base text-[#A66A47] font-midium"><i>(Note: This fee does not include any procedures such as biopsies or cryotherapy.)</i></h5>
          <h4 className="text-base text-[#A66A47] mt-[20px] font-midium ">Additional Procedure Fees</h4>
          <ul style={{listStyleType: "disc"}}>
            <li>
              <p className="text-base text-[#333333] font-normal leading-[150%] mt-[20px] text-justify md:text-start"><b>Cryotherapy (freezing of lesions): </b> $100.00 for up to 10 lesions</p>
            </li>
            <li>
              <p className="text-base text-[#333333] font-normal leading-[150%] mt-[20px] text-justify md:text-start"><b>Biopsy or Lesion Removal: </b>$150.00</p>
              <p className="text-base text-[#333333] font-normal leading-[150%] text-justify md:text-start"><i>(Pathology fees are not included. Specimens will be processed by Derm Path Diagnostics and billed separately at Medicare rates.)</i></p>
            </li>
            <li>
              <p className="text-base text-[#333333] font-normal leading-[150%] mt-[20px]  text-justify md:text-start"><b>Surgical Excision: </b>$500.00</p>
              <p className="text-base text-[#333333] font-normal leading-[150%] text-justify md:text-start"><i>(Excludes pathology fees. Speciments will be processed by Derm Path Diagnostics and billed separately at Medicare rates.)</i></p>
            </li>
            <li>
              <p className="text-base text-[#333333] font-normal leading-[150%] mt-[20px] text-justify md:text-start"><b>Mohs Micrographic Surgery: </b>$1,000.00</p>
              <p className="text-base text-[#333333] font-normal leading-[150%] text-justify md:text-start"><i>(Includes the first stage and closure. Each additional stage is $300.00.)</i></p>
            </li>
          </ul>
          <p>If you have any questions regarding pricing or insurance, please contact our office. We are happy to assist you.</p>
        </div>
        <div className="container mt-[60px] pb-[60px]">
          <h2 className="text-center text-[24px] md:text-[32px] font-semibold text-[#A66A47] mb-8">List of Accepted Insurance Plans</h2>
          <h5 className="text-base text-[#A66A47] font-midium ">
            We accept all major insurances including:
          </h5>
          <ul>
            <li>Aetna Commercial - Select/HMO/Managed Choice POS/Open Choice PPO/QPOS/Open Access/EOP/POS/PPO</li>
            <li>Aetna Banner - HMO/Open ACCESS/POS/PPO</li>
            <li>Aetna Medicare - Eagle PPO/Platinum HMO-POS/Premier HMO-POS/Elite PPO/Freedom PPO</li>
            <li>ACPN PPO 1</li>
            <li>Ameriplan Discount Card</li>
            <li>Antidote PPO</li>
            <li>CorVel Auto/PPO/Workers Comp</li>
            <li>Fusion PPO</li>
            <li>Galaxy Health PPO/Savings Card/Workers Comp</li>
            <li>Gold Kidney</li>
            <li>HealthSmart ACCEL/Auto/HPO/PPO/Workers Comp</li>
            <li>IHP Auto/Discount Card/PPO/Workers Comp</li>
            <li>Imperial Alignment PPO</li>
            <li>Imperial Amerigroup</li>
            <li>Imperial HealthCosmos Medical Group</li>
            <li>Imperial Marketplace Plan</li>
            <li>Imperial Medicare</li>
            <li>Molina/Magellan AHCCCS</li>
            <li>Multiplan Auto/Medicare Advantage/PPO/ValuePoint/Workers Comp</li>
            <li>Prime Health/Personal Injury Network/PPO/AUTO/Workers Comp/Telemedicine Program/WTC</li>
            <li>ASPA - Prospect Scan Desert Health</li>
            <li>ASPA - Provider Network of America Primary PPO/Supplemental/Workers Comp</li>
            <li>ASPA - Provider Select Inc</li>
            <li>ASPA - Three Rivers Provider Network PPO</li>
            <li>ASPA – UPMC</li>
            <li>ASPA - USA AUTO Medical/Managed Care PPO/Workers Comp</li>
            <li>ASPA - Velocity National Provider Network Auto/PPO/Workers Comp</li>
            <li>ASPA - Zelis Healthcare Auto/Medicaid-AHCCCS/Medicare/Primary Plan PPO/Supplemental/Workers Comp</li>
            <li>Banner Health Network</li>
            <li>Banner University Health Plan</li>
            <li>Blue Cross Blue Shield of Arizona</li>
            <li>Cigna Commercial (HMO, OPEN ACCESS, PPO)</li>
            <li>Community Care Network (CCN) - VA/TRIWEST</li>
            <li>Emblem Health (Previously GHI) - through First Health Network</li>
            <li>Innovation Care Partners (Needs HH CVO credentialing approval)</li>
            <li>Medicare</li>
            <li>Oscar + CIGNA</li>
            <li>Tricare West</li>
          </ul>
          <h5 className="text-base text-[#A66A47] font-midium ">
           We soon hope to accept these plans:
          </h5>
          <ul>
            <li>AHCCCS</li>
            <li>Allwell</li>
            <li>Ambetter</li>
            <li>Arizona Care Network</li>
            <li>Arizona Complete Care</li>
            <li>Health Choice AHCCCS/Medicare</li>
            <li>Blue Cross Blue Shield Advantage Medicare</li>
            <li>Caremore</li>
            <li>Cigna Medicare Advantage</li>
            <li>CMDP - through Mercy Care</li>
            <li>Devoted</li>
            <li>Arizona Priority Care Network - Eternal Health</li>
            <li>Arizona Priority Care Network – SCAN</li>
            <li>Arizona Priority Care Network – Alignment</li>
            <li>Arizona Priority Care Network – BCBSAZ</li>
            <li>First Health Network - need credentialing approved with AETNA first</li>
            <li>Health Net AZ - now AZ Complete Health</li>
            <li>Humana</li>
          </ul>
        </div>
        
        <div className="container mt-[60px] pb-[60px]">
          <p className="text-base text-[#333333] font-normal leading-[150%] mt-[60px] text-justify md:text-start">
            Lorem ipsum dolor sit amet consectetur. Semper lectus eu tincidunt
            semper non non id nulla. Amet elementum lacus semper augue maecenas
            lacus leo purus. Vel nunc rhoncus eu lorem pulvinar amet. Sodales
            mattis volutpat eu nam. Eget morbi id vitae auctor. Rutrum sit
            tellus velit potenti auctor eget sit leo faucibus. Posuere in netus
            porttitor id et vel vulputate. Porta lectus eu sagittis commodo at
            consequat ac. Tristique eget natoque ipsum dignissim sed nascetur.
            Blandit molestie suspendisse vel amet enim ultrices et scelerisque
            sem. Id morbi lectus velit volutpat pellentesque pellentesque
            suscipit. Quam nunc ipsum nisl felis proin scelerisque. Nunc cras
            enim eu eget vulputate egestas.
          </p>
          <p className="text-base text-[#333333] font-normal leading-[150%] mt-10 text-justify md:text-start">
            Cursus aliquam nisl consequat nibh curabitur. Rhoncus ultrices
            ullamcorper sodales viverra. Elementum morbi diam vehicula et
            commodo neque eget. Sed quisque ipsum sit est. Tristique tellus
            ullamcorper eget accumsan arcu augue tristique est. Tincidunt
            egestas justo sagittis integer volutpat urna quam.
          </p>
          <p className="text-base text-[#333333] font-normal leading-[150%] mt-10 text-justify md:text-start">
            Lectus velit auctor diam et dignissim. Urna interdum ipsum risus
            rhoncus tempor porta. In feugiat donec nulla egestas lorem sed
            commodo consectetur. A amet orci laoreet in viverra hac. Consequat
            fermentum mi ultricies proin. Nunc magna auctor eros orci. Sed
            mauris egestas lorem nisl ultrices ut interdum interdum. Porttitor
            nam aenean enim neque. Convallis elit lectus elementum mattis
            hendrerit risus dolor mattis lorem. Ut at eget consequat eget amet
            viverra. Auctor tellus nunc dis sed nunc tortor. Nulla ut in sed sit
            faucibus elit magna facilisi cras.
          </p>
          <p className="text-base text-[#333333] font-normal leading-[150%] mt-10 text-justify md:text-start">
            Ac neque et quam tristique. Tellus nibh massa hac vitae morbi felis
            lorem. Vestibulum nullam adipiscing magna sagittis integer magna
            nunc. In lectus ac amet dui venenatis. Risus interdum ac velit ut
            sed ultricies gravida. Ultrices nibh scelerisque eu at egestas erat.
            Ipsum etiam vel ut potenti porttitor mattis. Mauris eu aenean arcu
            pharetra aliquam non. Lobortis in adipiscing eleifend maecenas
            fermentum mattis proin. Aliquam felis commodo proin amet etiam. Sit
            tristique non non augue enim imperdiet massa amet id. Ac curabitur
            vel lectus ut praesent eget a. Enim convallis tincidunt nunc viverra
            velit. Donec morbi cras pretium sed.
          </p>
          <p className="text-base text-[#333333] font-normal leading-[150%] mt-10 text-justify md:text-start">
            Ultricies facilisi lorem fermentum vivamus iaculis quam viverra
            cursus duis. Erat dignissim eget vitae morbi nunc adipiscing
            lacinia. Viverra consectetur lorem ut sollicitudin imperdiet.
            Vulputate ac dis vitae sit sed. Pretium hendrerit pellentesque
            commodo amet fermentum mauris. Viverra egestas volutpat pellentesque
            mollis adipiscing velit. Enim fermentum gravida et netus magnis
            eget. Imperdiet vestibulum cras non mus velit purus massa egestas.
          </p>
        </div>
        <Consultation />
      </div>
    </section>
  );
};

export default page;
