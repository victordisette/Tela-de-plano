import React from 'react';

interface PricingHeaderProps {
  title: string;
  subtitle?: string;
}

export const PricingHeader: React.FC<PricingHeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="flex flex-col justify-center items-center text-center mb-10 max-md:mb-[30px] max-sm:mb-5">
      <h1 className="font-bold text-[70px] text-[rgba(0,63,13,1)] max-md:text-[50px] max-sm:text-[32px]">
        {title}
      </h1>
      {subtitle && (
        <h2 className="font-bold text-[70px] text-[rgba(39,124,48,1)] max-md:text-[50px] max-sm:text-[32px]">
          {subtitle}
        </h2>
      )}
    </header>
  );
};
