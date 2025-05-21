import Header from "@/components/Headers/Header";
import React from "react";
import DownloadForms from "./_components/DwonlodeFroms";
import FromUplode from "./_components/FromUplode";
import Consultation from "@/components/Consultation/Consultation";

const page = () => {
  return (
    <section>
      <div>
        <Header
          title="Dermatology Patient Forms"
          subtitle="Download and submit the necessary patient forms to streamline your visit. Please download the required PDFs and upload your completed forms below."
              />
              <div className=" container">
                  <DownloadForms />
                  <FromUplode />
              </div>
      </div>
      <Consultation/>
    </section>
  );
};

export default page;
