import React from 'react';

interface Props {
  title: string;
  subtitle?: string; 
}

const Header = ({ title, subtitle }: Props) => {
  return (
    <section className="bg-[#A66A47]">
      <div className=" container  py-5 md:py-10">
        <h2 className="w-full md:w-[750px] text-[25px] md:text-[40px] text-[#FFFFFF] font-semibold text-center mx-auto leading-[120%]">{title}</h2>
        {subtitle && ( 
          <p className="w-full md:w-[650px] mx-auto text-sm md:text-base text-[#FFFFFF] font-semibold text-center mt-5 md:mt-[30px]">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default Header;
