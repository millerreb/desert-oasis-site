import React from "react";
import Image from "next/image";
import AASLogo from "@/../../Public/icon/AASlogo.png";

const AASMember = () => {
  return (
    <div className="flex flex-col items-center mb-[40px]">
      <Image 
        height={100}
        width={242}
        src={AASLogo}
        alt="Arizona Advanced Surgery logo"
        className="mb-[1em]"
      />
      <p className="opacity-70">Proud member of AAS</p>
    </div>
  )
};

export default AASMember;