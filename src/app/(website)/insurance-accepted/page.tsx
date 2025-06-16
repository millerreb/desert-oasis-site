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
          <h4 className="text-base text-[#A66A47] font-midium ">Additional Procedure Fees</h4>
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
